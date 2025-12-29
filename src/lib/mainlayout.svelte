<script lang="ts">
	import SiteHeader from '$lib/siteheader.svelte';
	import Footer from '$lib/footer.svelte';
	let { children } = $props();
</script>

<SiteHeader />
<main>
	{#if children}
		{@render children()}
	{:else}
		<p>No Content Defined!</p>
	{/if}
</main>

<Footer />
