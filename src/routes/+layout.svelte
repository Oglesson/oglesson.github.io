<script lang="ts">
	import '$lib/styles/n.css';
	import '$lib/styles/maintheme.css';
	import { pageName } from '$lib/shared.svelte';
	let { children } = $props();
</script>

<svelte:head><title>Oglesson.com - {pageName}</title></svelte:head>

{@render children?.()}
