<script lang="ts">
	import '$lib/styles/n.css';
	import '$lib/styles/maintheme.css';
	let { children } = $props();
	let sectionname = 'Home'; // Need to figure out how to set this dynamically later
</script>

<svelte:head><title>Oglesson.com - {sectionname}</title></svelte:head>

{@render children?.()}
