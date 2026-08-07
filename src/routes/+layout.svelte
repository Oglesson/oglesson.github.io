<script lang="ts">
	import '$lib/styles/n.css';
	import '$lib/styles/maintheme.css';
	let { children } = $props();
</script>

<!--
	Fallback only: every route should set its own <svelte:head><title>/<meta name="description">
	(see the individual +page.svelte files, or projectpg.svelte for the project detail pages).
	A page-level <title> replaces this one (Svelte de-dupes <title> specifically), so this is only
	seen if a route forgets to set one. Deliberately no <meta name="description"> here — unlike
	<title>, meta tags aren't de-duped, so a fallback one here would double up with every page's own.
-->
<svelte:head>
	<title>Sophie Oglesson | Product Developer & Web Strategist</title>
</svelte:head>

{@render children?.()}
