<script lang="ts">
	import { SITE_URL, SITE_NAME } from '$lib/site';

	type LinkItem = { label: string; href: string };
	type CarouselItem = { title: string; body: string; url?: string };
	type VendorItem = { name: string; url: string };

	const links: LinkItem[] = [
		{ label: 'Instagram - OggHealth', href: 'https://instagram.com/ogghealth' },
		{ label: 'Instagram - Oglesson (private)', href: 'https://instagram.com/oglesson' },
		{ label: 'Bluesky - Clone', href: 'http://ithinkimaclone.bsky.social' },
		{ label: 'Tiktok (private)', href: 'https://www.tiktok.com/@ithinkimaclonenow' },
		{ label: 'Discord', href: 'https://discordapp.com/users/oglesson' }
	];

	const slides: CarouselItem[] = [
		{
			title: 'Slide One',
			body: 'Placeholder carousel content.'
		},
		{
			title: 'Slide Two',
			body: 'Placeholder carousel content.'
		},
		{
			title: 'Slide Three',
			body: 'Placeholder carousel content.'
		}
	];

	const vendors: VendorItem[] = [
		{ name: 'EBay', url: 'https://www.ebay.co.uk/usr/sopogle-0' },
		{ name: 'Vinted', url: 'https://www.vinted.co.uk/member/179915222' }
	];

	const ebayItems: CarouselItem[] = [
		{
			title: 'Fantasy Unicorn Print',
			body: 'The Journey by Briar - Mounted Art Print by Imagus Art',
			url: 'https://www.ebay.co.uk/itm/317923603461' // Example URL
		},
		{
			title: 'Retro Polaroid Camera',
			body: 'Polaroid I-Zone 200 Mini Instant Camera/Silver And black mesh Case'
		}
	];

	const vintedItems: CarouselItem[] = [
		{
			title: 'Kids Panda Onesie',
			body: "Child's fluffy glittery panda onesie with hood and pockets",
			url: 'https://www.vinted.co.uk/items/9032018726-childs-fluffy-glittery-panda-onesie-with-hood-and-pockets' // Example URL
		},
		{
			title: 'Kids Purple Snow Suit',
			body: 'Purple Quilted Snow Suit for a 4 year old',
			url: 'https://www.vinted.co.uk/items/8149429140-purple-quilted-snow-suit' // Example URL
		}
	];

	// Maps a lowercased vendor name to its `{vendorName}Items` const above.
	// (JS has no way to look up a local const by a dynamic string, hence the map.)
	const vendorItemsByName: Record<string, CarouselItem[]> = {
		ebay: ebayItems,
		vinted: vintedItems
	};

	// Given a vendor name (e.g. "EBay"), returns its carousel items,
	// falling back to the placeholder slides if no `{vendorName}Items` list exists.
	function getVendorItems(vendorName: string): CarouselItem[] {
		return vendorItemsByName[vendorName.toLowerCase()] ?? slides;
	}

	// Each vendor gets its own active-slide index, keyed by vendor name.
	let activeByVendor = $state<Record<string, number>>({});

	function activeIndex(vendorName: string): number {
		return activeByVendor[vendorName] ?? 0;
	}

	function goTo(vendorName: string, index: number, length: number) {
		activeByVendor[vendorName] = ((index % length) + length) % length;
	}

	function next(vendorName: string, length: number) {
		goTo(vendorName, activeIndex(vendorName) + 1, length);
	}

	function prev(vendorName: string, length: number) {
		goTo(vendorName, activeIndex(vendorName) - 1, length);
	}

	let touchStartX = 0;

	function onTouchStart(e: TouchEvent) {
		touchStartX = e.changedTouches[0].clientX;
	}

	function onTouchEnd(e: TouchEvent, vendorName: string, length: number) {
		const delta = e.changedTouches[0].clientX - touchStartX;
		if (Math.abs(delta) > 40) {
			if (delta < 0) {
				next(vendorName, length);
			} else {
				prev(vendorName, length);
			}
		}
	}
</script>

<svelte:head>
	<title>Links</title>
	<meta
		name="description"
		content="Sophie Oglesson's links: social profiles, marketplaces, and other places to find her online."
	/>
	<meta name="robots" content="noindex, nofollow" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content="Links | Sophie Oglesson" />
	<meta
		property="og:description"
		content="Sophie Oglesson's links: social profiles, marketplaces, and other places to find her online."
	/>
	<meta property="og:url" content={SITE_URL + '/links'} />
</svelte:head>

<div class="links-page">
	<div class="links-card">
		<h1>Links</h1>
		<!-- external URLs, not app routes -->
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<h2>Socials</h2>
		<ul class="link-list">
			{#each links as link (link.label)}
				<li>
					<a
						class="link-button"
						href={link.href}
						target="_blank"
						rel="noopener noreferrer">{link.label}</a
					>
				</li>
			{/each}
		</ul>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
		<h2>Buy my stuff</h2>
		<p class="section-note">Placeholders whilst I add API integration.</p>
		<!-- external URLs, not app routes -->
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<div id="selling-carousels">
			{#each vendors as vendor (vendor.name)}
				{@const items = getVendorItems(vendor.name)}
				{@const active = activeIndex(vendor.name)}
				<h3>{vendor.name}</h3>
				<a class="vendor-link" href={vendor.url} target="_blank" rel="noopener noreferrer"
					>Visit my selling page for {vendor.name}</a
				>
				<section
					class="carousel"
					aria-roledescription="carousel"
					aria-label="Buy my stuff from {vendor.name}"
					ontouchstart={onTouchStart}
					ontouchend={(e) => onTouchEnd(e, vendor.name, items.length)}
					id={vendor.name.replace(/\s+/g, '-').toLowerCase()}
				>
					<div class="carousel-track" style="transform: translateX(-{active * 100}%)">
						{#each items as item, i (item.title + i)}
							<div class="carousel-slide" aria-hidden={active !== i}>
								<h3>
									{#if item.url}
										<a
											class="item-link"
											href={item.url}
											target="_blank"
											rel="noopener noreferrer">{item.title}</a
										>
									{:else}
										{item.title}
									{/if}
								</h3>
								<p>{item.body}</p>
							</div>
						{/each}
					</div>

					<button
						class="carousel-nav prev"
						onclick={() => prev(vendor.name, items.length)}
						aria-label="Previous slide">‹</button
					>
					<button
						class="carousel-nav next"
						onclick={() => next(vendor.name, items.length)}
						aria-label="Next slide">›</button
					>

					<div class="carousel-dots">
						{#each items as item, i (item.title + i)}
							<button
								class="dot {i === active ? 'active' : ''}"
								aria-label={`Go to slide ${i + 1}`}
								aria-current={i === active}
								onclick={() => goTo(vendor.name, i, items.length)}
							></button>
						{/each}
					</div>
				</section>
			{/each}
		</div>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	</div>
</div>

<style>
	:global(body) {
		background-color: var(--lightest);
	}

	.links-page {
		min-height: 100vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding: 2rem 1rem;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
		color: var(--textdark);
	}

	.links-card {
		width: 100%;
		max-width: 32rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	h1 {
		margin: 0;
		color: var(--dark);
	}

	h2 {
		text-align: left;
		align-self: stretch;
		margin: 0;
	}

	.section-note {
		text-align: left;
		align-self: stretch;
		margin: 0;
	}

	.vendor-link {
		display: block;
		margin-bottom: 1rem;
	}

	.link-list {
		list-style: none;
		margin: 0;
		padding: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.link-button {
		display: block;
		width: 100%;
		box-sizing: border-box;
		text-align: center;
		padding: 0.9rem 1rem;
		border-radius: 0.75rem;
		background: var(--dark);
		color: var(--textlight);
		font-weight: 600;
		text-decoration: none;
		transition:
			background 0.2s,
			transform 0.1s;
	}

	.link-button:hover {
		background: var(--accent);
	}

	.link-button:active {
		transform: scale(0.98);
	}

	.carousel {
		position: relative;
		width: 100%;
		overflow: hidden;
		border-radius: 0.75rem;
		background: var(--textlight);
		border: 1px solid var(--medium);
		margin-bottom: 1rem;
	}

	.carousel-track {
		display: flex;
		transition: transform 0.3s ease;
	}

	.carousel-slide {
		flex: 0 0 100%;
		box-sizing: border-box;
		padding: 2rem 1.5rem;
		text-align: center;
	}

	.carousel-slide h3 {
		margin: 0 0 0.5rem;
		color: var(--dark);
	}

	.item-link {
		color: var(--accent);
		text-decoration: underline;
		text-underline-offset: 0.2rem;
	}

	.item-link:hover,
	.item-link:focus-visible {
		color: var(--dark);
	}

	.carousel-slide p {
		margin: 0;
	}

	.carousel-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(255, 255, 255, 0.8);
		border: 1px solid var(--medium);
		color: var(--dark);
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		font-size: 0.9rem;
		line-height: 1;
		cursor: pointer;
	}

	.carousel-nav.prev {
		left: 0.25rem;
	}

	.carousel-nav.next {
		right: 0.25rem;
	}

	.carousel-dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		padding: 0 0 1rem;
	}

	.dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		border: none;
		background: var(--medium);
		padding: 0;
		cursor: pointer;
	}

	.dot.active {
		background: var(--dark);
	}

	@media (min-width: 600px) {
		.links-page {
			padding: 3rem 1rem;
		}

		.link-button {
			padding: 1rem 1.25rem;
		}

		.carousel-slide {
			padding: 2.5rem 3rem;
		}

		.carousel-nav {
			width: 2.25rem;
			height: 2.25rem;
			font-size: 1.25rem;
		}

		.carousel-nav.prev {
			left: 0.5rem;
		}

		.carousel-nav.next {
			right: 0.5rem;
		}
	}
</style>
