<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import '$lib/styles/n.css';
	import '$lib/styles/maintheme.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
