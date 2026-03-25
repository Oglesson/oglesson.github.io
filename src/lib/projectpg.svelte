<script lang="ts">
	import Mainlayout from '$lib/mainlayout.svelte';
	import Skillschip from '$lib/skillschip.svelte';
	let { children, pTitle = 'Project Title', pTechList = [] } = $props();

	/** TO DO : Turn this into a more reusable component as the page structure is currently similar*/
</script>

<Mainlayout>
	<div class="project-page">
		<h2>{pTitle}</h2>
		{#if children}
			{@render children()}
		{:else}
			<p>info about a project.</p>
		{/if}
		{#if pTechList.length > 0}
			<h3>Relevant Technologies Used</h3>
			<ul class="tech-list">
				{#each pTechList as tech (tech)}
					<li><Skillschip skillTitle={tech} /></li>
				{/each}
			</ul>
		{/if}
	</div>
</Mainlayout>

<style>
	.project-page {
		padding: 1rem;
	}

	.project-page :global(a) {
		color: var(--dark);
		text-decoration: underline;
	}

	.project-page :global(a:hover) {
		color: var(--accent);
	}

	.tech-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
</style>
