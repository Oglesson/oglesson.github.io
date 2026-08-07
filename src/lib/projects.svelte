<script>
	import { resolve } from '$app/paths';
	import chronologyImg from '$lib/assets/projects/chronology.svg';
	import choreTrackerImg from '$lib/assets/projects/chore-tracker.svg';

	const projects = [
		{
			href: resolve('/chronology'),
			title: 'Chronology',
			blurb: 'App to improve efficiency during manufacturing processes. This is a sample/duplicate of the full professional project I worked on.',
			image: chronologyImg
		},
		{
			href: resolve('/chore-tracker'),
			title: 'Chore Tracker',
			blurb: 'Mobile app to track chores and reward points for kids, built with React Native.',
			image: choreTrackerImg
		}
	];
</script>

<section id="projects" class="loadIn">
	<div class="project-container">
		<h2>Projects</h2>
		<p>
			Mixture of personal and professional projects. Some details may be limited and/or
			altered to retain confidentiality.
		</p>
		<div class="project-grid">
			{#each projects as project (project.href)}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- project.href values are produced by resolve() in the projects array above -->
				<a href={project.href}>
					<div class="project-card" style:--card-image={`url("${project.image}")`}>
						<h3>{project.title}</h3>
						<p>{project.blurb}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	section#projects {
		background: var(--textlight);
		color: var(--dark);
		padding: 1.5rem 2rem;
	}
	/* was an h3; restore its size/margin now that it's an h2, for SEO */
	h2 {
		font-size: 1.5rem;
		margin-bottom: 1em;
	}

	/* project card titles: were h4; restore their size/margin now that they're h3 */
	.project-card h3 {
		font-size: 1em;
		margin-bottom: 1.33em;
	}

	.project-grid a {
		display: block;
		margin-bottom: 1rem;
	}

	.project-card {
		border: 2px solid var(--medium);
		padding: 1rem;
		transition: 0.3s;
		height: 100%;
		box-sizing: border-box;
		/* Project screenshot behind a pale overlay so the text stays readable */
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), var(--card-image);
		background-size: auto, cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.project-card:hover {
		background-image:
			linear-gradient(rgba(60, 2, 125, 0.85), rgba(60, 2, 125, 0.85)), var(--card-image);
		color: var(--textlight);
	}

	@media (min-width: 600px) {
		section#projects {
			padding: 0;
		}

		.project-container {
			max-width: var(--screen-body-width, 1200px);
			margin: 0 auto;
			padding: 3.5rem 0;
		}

		.project-grid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
			align-items: stretch;
		}

		.project-grid a {
			margin-bottom: 0;
		}
	}
</style>
