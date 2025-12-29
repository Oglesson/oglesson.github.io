<section class="skills loadIn" id="skills">
	<h3>Skills</h3>

	<details class="skill-chip">
		<summary>Agile / SCRUM</summary>
		15 years working on Agile based projects, usually based on SCUMM and tailored to the needs of
		the business
	</details>
	<details class="skill-chip">
		<summary>HTML</summary>
		20+ years experience in personal and professional projects writing semantic, accessible, minimal
		markup. Worked with numerous templating languages including JSP and adding content elements to
		various CMS systems such as AEM, Umbraco and WordPress.
	</details>
	<details class="skill-chip">
		<summary>CSS</summary>
		20+ years experience in personal and professional projects including SASS, LESS, modules, TailwindCSS
		and more.
	</details>
	<details class="skill-chip">
		<summary>JavaScript</summary>
		15+ years professional experience, including ES6+, DOM manipulation, Fetch API and more. Worked
		with Vanilla and numerous libraries including JQuery.
	</details>
	<details class="skill-chip">
		<summary>React</summary>
		5 years professional experience.
	</details>
	<details class="skill-chip">
		<summary>TypeScript</summary>
		3 years professional experience.
	</details>
	<details class="skill-chip">
		<summary>Svelte</summary>
		6 months experience on personal projects.
	</details>
</section>

<style>
	.skills {
		background: var(--medium);
		color: var(--textlight);
		padding: 1.5rem 2rem;
	}
	.skill-chip {
		background: var(--accent);
		color: var(--textlight);
		padding: 0.5rem 1rem;
		margin: 0.25rem;
		border-radius: 20px;
		display: inline-block;
		transition: all 0.2s ease-in;
	}
	.skill-chip:hover {
		background: var(--dark);
	}
	.skill-chip[open] summary {
		margin-bottom: 0.5rem;
	}

	.skill-chip[open] {
		padding: 1rem;
	}
</style>
