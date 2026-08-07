/**
 * Standalone test for src/lib/server/ebay.js.
 *
 * Runs the real module against a mocked global.fetch, so the caching,
 * deduplication and stale-fallback behavior can be verified without a
 * SvelteKit project or real eBay credentials.
 *
 *   node test-ebay.mjs
 */

import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import assert from 'node:assert/strict';

// --- load ebay.js with the SvelteKit $env import stubbed out -----------------

const tmp = await mkdtemp(join(tmpdir(), 'ebay-test-'));

const src = await readFile(new URL('./src/lib/server/ebay.js', import.meta.url), 'utf8');

await writeFile(
	join(tmp, 'env.js'),
	`export const env = {
		EBAY_CLIENT_ID: 'test-client-id',
		EBAY_CLIENT_SECRET: 'test-client-secret',
		EBAY_SELLER_ID: 'test_seller',
		EBAY_MARKETPLACE_ID: 'EBAY_US',
		EBAY_CACHE_TTL_MS: '200'
	};`
);

await writeFile(
	join(tmp, 'ebay.js'),
	src.replace("from '$env/dynamic/private'", "from './env.js'")
);

const { getListings } = await import(join(tmp, 'ebay.js'));

// --- mock fetch -------------------------------------------------------------

let tokenCalls = 0;
let searchCalls = 0;
let searchShouldFail = false;
let lastSearchUrl = '';
let itemCount = 3;

function makeItems(n) {
	return Array.from({ length: n }, (_, i) => ({
		itemId: `v1|11000${i}|0`,
		title: `Vintage Widget ${i}`,
		itemWebUrl: `https://www.ebay.com/itm/11000${i}`,
		image: { imageUrl: `https://i.ebayimg.com/images/g/${i}/s-l500.jpg` },
		price: { value: `${19.99 + i}`, currency: 'USD' },
		buyingOptions: i % 2 === 0 ? ['FIXED_PRICE'] : ['AUCTION'],
		condition: 'Used',
		bidCount: i % 2 === 0 ? undefined : i,
		shippingOptions: [{ shippingCost: { value: i === 0 ? '0.0' : '4.99', currency: 'USD' } }]
	}));
}

global.fetch = async (url, opts = {}) => {
	const href = String(url);

	if (href.includes('/identity/v1/oauth2/token')) {
		tokenCalls++;
		assert.ok(opts.headers.Authorization.startsWith('Basic '), 'token uses Basic auth');
		const decoded = Buffer.from(opts.headers.Authorization.slice(6), 'base64').toString();
		assert.equal(decoded, 'test-client-id:test-client-secret', 'basic auth payload');
		assert.match(
			String(opts.body),
			/grant_type=client_credentials/,
			'client credentials grant'
		);
		return {
			ok: true,
			json: async () => ({ access_token: 'MOCK_TOKEN', expires_in: 7200 })
		};
	}

	if (href.includes('/buy/browse/v1/item_summary/search')) {
		searchCalls++;
		lastSearchUrl = href;
		if (searchShouldFail) {
			return { ok: false, status: 503, text: async () => 'Service Unavailable' };
		}
		assert.equal(opts.headers.Authorization, 'Bearer MOCK_TOKEN', 'search uses bearer token');
		assert.equal(opts.headers['X-EBAY-C-MARKETPLACE-ID'], 'EBAY_US', 'marketplace header');
		return {
			ok: true,
			json: async () => ({ total: itemCount, itemSummaries: makeItems(itemCount) })
		};
	}

	throw new Error(`unexpected fetch: ${href}`);
};

// --- tests ------------------------------------------------------------------

const results = [];
function check(name, fn) {
	try {
		fn();
		results.push(`  PASS  ${name}`);
	} catch (err) {
		results.push(`  FAIL  ${name}\n        ${err.message}`);
		process.exitCode = 1;
	}
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 1. first call fetches and normalizes
const first = await getListings();

check('fetches listings on cold cache', () => {
	assert.equal(tokenCalls, 1);
	assert.equal(searchCalls, 1);
	assert.equal(first.items.length, 3);
	assert.equal(first.stale, false);
});

check('normalizes item shape', () => {
	const item = first.items[0];
	assert.equal(item.title, 'Vintage Widget 0');
	assert.equal(item.price, 19.99);
	assert.equal(item.currency, 'USD');
	assert.equal(item.url, 'https://www.ebay.com/itm/110000');
	assert.equal(item.freeShipping, true, 'zero shipping cost => freeShipping');
	assert.equal(first.items[1].freeShipping, false, 'nonzero shipping cost => not free');
	assert.deepEqual(first.items[1].buyingOptions, ['AUCTION']);
	assert.equal(first.items[1].bidCount, 1);
});

check('sends sellers filter and category_ids=0 workaround', () => {
	const parsed = new URL(lastSearchUrl);
	assert.equal(parsed.searchParams.get('filter'), 'sellers:{test_seller}');
	assert.equal(parsed.searchParams.get('category_ids'), '0');
	assert.equal(parsed.searchParams.get('limit'), '200');
});

// 2. second call within TTL is served from cache
await getListings();

check('serves from cache within TTL', () => {
	assert.equal(searchCalls, 1, 'no additional upstream search');
	assert.equal(tokenCalls, 1, 'no additional token request');
});

// 3. concurrent cold misses are deduplicated
await sleep(250); // let the 200ms TTL lapse
const before = searchCalls;
await Promise.all([getListings(), getListings(), getListings()]);

check('deduplicates concurrent cache misses', () => {
	assert.equal(searchCalls, before + 1, 'three concurrent calls => one upstream fetch');
});

// 4. token is reused across refreshes (not expired yet)
check('reuses OAuth token across refreshes', () => {
	assert.equal(tokenCalls, 1);
});

// 5. force bypasses the cache
const forcedBefore = searchCalls;
await getListings({ force: true });

check('force:true bypasses cache', () => {
	assert.equal(searchCalls, forcedBefore + 1);
});

// 6. upstream failure falls back to stale cache
await sleep(250);
searchShouldFail = true;
const stale = await getListings();

check('serves stale cache when eBay errors', () => {
	assert.equal(stale.stale, true);
	assert.equal(stale.items.length, 3, 'still returns the last good data');
});

// 7. cold cache + upstream failure throws (so the route can show an error)
searchShouldFail = true;
let threw = false;
try {
	await getListings({ seller: 'never_fetched_seller' });
} catch {
	threw = true;
}

check('throws when there is no cache to fall back on', () => {
	assert.equal(threw, true);
});

// --- report -----------------------------------------------------------------

await rm(tmp, { recursive: true, force: true });

console.log('\nebay.js\n');
console.log(results.join('\n'));
console.log(`\n${results.filter((r) => r.includes('PASS')).length}/${results.length} passing\n`);
