<script lang="ts">
	import Mainlayout from '$lib/mainlayout.svelte';
	import Skillschip from '$lib/skillschip.svelte';
	import { SITE_URL, SITE_NAME } from '$lib/site';
	let {
		children,
		pTitle = 'Project Title',
		pDescription = '',
		pUrl = '',
		pTechList = []
	} = $props();

	let fullTitle = $derived(`${pTitle} | Sophie Oglesson`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	{#if pDescription}
		<meta name="description" content={pDescription} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={fullTitle} />
	{#if pDescription}
		<meta property="og:description" content={pDescription} />
	{/if}
	{#if pUrl}
		<meta property="og:url" content="{SITE_URL}{pUrl}" />
	{/if}
</svelte:head>

<Mainlayout>
	<div class="project-page">
		<h1>{pTitle}</h1>
		<div class="project-body">
			{#if children}
				{@render children()}
			{:else}
				<p>info about a project.</p>
			{/if}
		</div>
		<section class="tech-section">
			{#if pTechList.length > 0}
				<h2>Relevant Technologies Used</h2>
				<ul class="tech-list">
					{#each pTechList as tech (tech)}
						<li><Skillschip skillTitle={tech} /></li>
					{/each}
				</ul>
			{/if}
		</section>
	</div>
</Mainlayout>

<style>
	.project-page {
		padding: 1rem;
	}

	/* was an h2; restore its size/margin now that it's an h1, for SEO */
	.project-page > h1 {
		font-size: 1.5em;
		margin-bottom: 0.83em;
	}

	.tech-section {
		margin-top: 2rem;
	}

	/* "Relevant Technologies Used" was an h3; restore its size/margin now that it's an h2 */
	.tech-section > h2 {
		font-size: 1.17em;
		margin-bottom: 1em;
	}

	.project-page :global(a) {
		color: var(--dark);
		text-decoration: underline;
	}

	.project-page :global(a:hover) {
		color: var(--accent);
	}

	/* Body copy: n.css's `html { line-height: 1.15 }` is tuned for UI chrome, not
	   paragraphs of prose, so give the actual project write-ups a readable rhythm. */
	.project-body :global(p),
	.project-body :global(li) {
		line-height: 1.6;
	}

	.project-body :global(p),
	.project-body :global(ul) {
		margin: 0 0 1.25em;
	}

	.project-body :global(li + li) {
		margin-top: 0.5em;
	}

	.project-body :global(p:last-child),
	.project-body :global(ul:last-child) {
		margin-bottom: 0;
	}

	.tech-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	@media (min-width: 600px) {
		.project-page {
			padding: 2rem 0;
			max-width: var(--screen-body-width, 1200px);
			margin: 0 auto;
		}
		.tech-section {
			margin-top: 3rem;
		}
	}
</style>
