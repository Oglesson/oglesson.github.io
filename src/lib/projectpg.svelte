<script lang="ts">
	import Mainlayout from '$lib/mainlayout.svelte';
	let { children } = $props();
</script>

<Mainlayout>
	<div class="project-page">
		{#if children}
			{@render children()}
		{:else}
			<p>info about a project.</p>
		{/if}
	</div>
</Mainlayout>

<style>
	.project-page {
		padding: 1rem;
	}
</style>
