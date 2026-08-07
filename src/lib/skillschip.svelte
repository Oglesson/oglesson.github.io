<script lang="ts">
	let {
		skillTitle = 'Skill Title',
		skillContent = ''
	}: { skillTitle?: string; skillContent?: string } = $props();
</script>

{#if skillContent}
	<details class="skill-chip">
		<summary>{skillTitle}</summary>
		{skillContent}
	</details>
{:else}
	<strong class="skill-chip">{skillTitle}</strong>
{/if}

<style>
	.skill-chip {
		background: var(--accent);
		color: var(--textlight);
		padding: 0.5rem 1rem;
		margin: 0.25rem;
		border-radius: 20px;
		display: inline-block;
		transition: all 0.2s ease-in;
		cursor: pointer;
		font-weight: normal;
	}
	.skill-chip:not([open]):hover {
		background: var(--dark);
	}

	.skill-chip[open] {
		background: var(--dark);
		padding: 1rem;
	}

	.skill-chip[open] summary {
		margin-bottom: 0.5rem;
	}

	@media (min-width: 600px) {
		.skill-chip[open] {
			display: block;
			width: 100%;
			box-sizing: border-box;
		}
	}
</style>
