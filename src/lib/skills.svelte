<script lang="ts">
	import Skillschip from '$lib/skillschip.svelte';
</script>

<section class="skills loadIn" id="skills">
	<h3>Main Skills</h3>

	<Skillschip
		skillTitle="Agile / SCRUM"
		skillContent="15 years working on Agile based projects, usually based on SCUMM and tailored to the needs of the business"
	/>
	<Skillschip
		skillTitle="CSS"
		skillContent="20+ years experience in personal and professional projects including SASS, LESS, modules, TailwindCSS and more."
	/>
	<Skillschip
		skillTitle="HTML"
		skillContent="20+ years experience in personal and professional projects writing semantic, accessible, minimal markup. Worked with numerous templating languages including JSP and adding content elements to various CMS systems such as AEM, Umbraco and WordPress."
	/>
	<Skillschip
		skillTitle="JavaScript"
		skillContent="15+ years professional experience, including ES6+, DOM manipulation, Fetch API and more. Worked with Vanilla and numerous libraries including JQuery."
	/>
	<Skillschip skillTitle="React" skillContent="5 years professional experience." />
	<Skillschip skillTitle="Svelte" skillContent="6 months experience on personal projects." />

	<Skillschip skillTitle="TypeScript" skillContent="3 years professional experience." />
</section>

<style>
	.skills {
		background: var(--textlight);
		color: var(--textdark);
		padding: 1.5rem 2rem;
		border-bottom: 1px solid var(--dark);
	}

	.skills h3 {
		color: var(--dark);
		font-size: 1.5rem;
	}
</style>
