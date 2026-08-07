# eBay listings in SvelteKit

Displays your active eBay listings on your own site using the eBay **Browse API**, with server-side caching.

## Files

```
.env.example                       credentials template
src/lib/server/ebay.js             API client: OAuth + caching + normalization
src/routes/+page.server.js         server load function
src/routes/+page.svelte            responsive grid
src/routes/api/listings/+server.js optional JSON endpoint
```

Drop these into an existing SvelteKit project, or scaffold one first with `npx sv create my-shop`.

## Setup

1. **Get API keys.** Sign up at [developer.ebay.com](https://developer.ebay.com/), then go to [Application Keysets](https://developer.ebay.com/my/keys). You want the **Production** keyset's _App ID (Client ID)_ and _Cert ID (Client Secret)_. It's free.

2. **Configure.** `cp .env.example .env` and fill in your Client ID, Client Secret, and eBay username. Make sure `.env` is gitignored.

3. **Run.** `npm run dev` and open the page.

No approval process is needed — the Browse API's `search` and `getItem` methods only require an application token from the client credentials flow, not user consent or special permissions.

## How it works

**Auth.** POST to `/identity/v1/oauth2/token` with HTTP Basic auth (`base64(clientId:clientSecret)`) and `grant_type=client_credentials`, scope `https://api.ebay.com/oauth/api_scope`. Returns a token valid ~2 hours, which is cached in memory and reused.

**Fetch.** GET `/buy/browse/v1/item_summary/search` with `filter=sellers:{yourUsername}`, a bearer token, and an `X-EBAY-C-MARKETPLACE-ID` header.

**Cache.** Two layers: the OAuth token (until ~1 min before expiry) and the listing results (10 min TTL by default, configurable). Concurrent cache misses are collapsed into a single upstream request, and if a refresh fails the last good response is served rather than an empty page.

## Gotchas worth knowing

**The `category_ids=0` hack.** The Browse API rejects a `sellers` filter on its own — it requires one of `q`, `category_ids`, `gtin`, `epid`, or `charity_ids`. Passing `category_ids=0` ("all categories") is the widely used workaround to get everything a seller has listed. It works reliably in practice but isn't documented by eBay, so it could break. The documented fallback is to query each top-level category separately and merge results.

**New listings lag.** Items typically take 10–15 minutes to appear in Browse API results after being listed.

**Some items are missing.** The Browse API returns fewer results than the old Finding API did in some cases. Not much you can do about this.

**Don't use the Finding API.** It and the Shopping API were decommissioned in February 2025. Any tutorial referencing `findItemsAdvanced` or `findItemsByKeywords` is out of date.

**Rate limits.** The default Browse API allowance is 5,000 calls/day. With a 10-minute cache you'll use ~144/day per seller, so there's plenty of headroom — but don't drop the TTL to zero.

**Serverless caching caveat.** The in-memory cache works per-instance. On Vercel/Netlify/Cloudflare, cold starts and multiple instances mean more upstream calls than you'd expect. The `cache-control` headers in the load function handle most of this at the CDN layer, but for heavy traffic consider Redis or a KV store instead of the `Map`.

**Affiliate links.** Set `EBAY_CAMPAIGN_ID` to your eBay Partner Network campaign and the client sends an `X-EBAY-C-ENDUSERCTX` header — eBay then returns `itemAffiliateWebUrl` on each item, and you earn commission on referred sales. Optional; leave it unset and you get plain links.

## Testing without a real project

`test-ebay.mjs` exercises the token caching, TTL cache, deduplication, and stale-fallback logic against a mocked `fetch`, so you can verify the behavior before wiring up real credentials:

```
node test-ebay.mjs
```
