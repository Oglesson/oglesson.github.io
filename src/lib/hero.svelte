<script>
	import { socialLinks } from '$lib/social-links';
</script>

<section class="hero">
	<div class="hero-container">
		<div class="hero-text">
			<h1>Hi, I'm <strong>Sophie Oglesson</strong></h1>
			<h2>Product Developer | Strategist | Problem Solver</h2>
			<section id="aboutme">
				<p>
					With twentyish years experience in web development and digital planning across a
					spectrum of industries, I love to fix the broken and tweak the new for a happier
					user experience.
				</p>
				<p>
					And when I'm not doing that, I can be found on a Ski Erg, under a barbell or in
					a field/forest pretending to be someone else.
				</p>
			</section>
		</div>
		<ul class="social-links">
			{#each socialLinks as link (link.id)}
				<li>
					<!-- eslint-disable svelte/no-navigation-without-resolve -- entries in social-links.ts are always external URLs -->
					<a
						href={link.href}
						aria-label={link.ariaLabel}
						target="_blank"
						rel="noopener external me"
						><span data-icon={link.icon}>{link.label}</span></a
					>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.hero {
		/* Subtle SVG grain layered over a diagonal gradient */
		background-image:
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E"),
			linear-gradient(135deg, #2c015b 0%, #6c5a9c 100%);
		background-size:
			140px 140px,
			auto;
		color: var(--textlight);
		padding: 2rem;
		text-align: center;
	}

	.hero p {
		margin-top: 0;
	}

	/* Sized to match their former h2/h3 appearance now that they're h1/h2 for SEO */
	.hero-text h1 {
		font-size: 1.5em;
		margin-bottom: 0.83em;
	}

	.hero-text h2 {
		font-size: 1.17em;
		margin-bottom: 1em;
	}
	.social-links {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0 0;
		display: flex;
		justify-content: center;
		gap: 1rem;
		overflow: hidden;
		margin-block-start: 0;
		margin-block-end: 0;
		padding-inline-start: 0;
	}

	.hero a {
		color: transparent;
	}

	.social-links span {
		color: transparent;
		display: block;
		width: 2.5rem;
		height: 2.5rem;
		background-color: var(--textlight);
	}

	#aboutme {
		height: 0;
		overflow: hidden;
	}

	[data-icon='linkedin'] {
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'/%3E%3C/svg%3E");
		mask-image: var(--svg);
		background-color: var(--textlight);
	}
	[data-icon='bluesky'] {
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662c-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4c.68 2.28 3.094 3.05 5.32 2.803c-3.26.483-6.157 1.67-2.36 5.898c4.178 4.325 5.726-.927 6.52-3.59c.794 2.663 1.708 7.726 6.444 3.59c3.556-3.59.977-5.415-2.283-5.898c2.225.247 4.64-.523 5.319-2.803c.205-.69.52-4.825.52-5.399c0-.575-.116-1.55-.752-1.838c-.549-.248-1.386-.517-3.583 1.033c-2.293 1.621-4.76 4.904-5.665 6.664'/%3E%3C/svg%3E");
		mask-image: var(--svg);
		background-color: var(--textlight);
	}
	[data-icon='github'] {
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2'/%3E%3C/svg%3E");
		mask-image: var(--svg);
		background-color: var(--textlight);
	}
	[data-icon='email'] {
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z'/%3E%3C/svg%3E");
		mask-image: var(--svg);
		background-color: var(--textlight);
	}

	@media (min-width: 600px) {
		#aboutme {
			height: initial;
		}

		.hero {
			display: flex;
			text-align: left;
			padding: 2.5rem 0;
		}

		.hero-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			text-align: left;
			gap: 2rem;
			max-width: var(--screen-body-width, 1200px);
			padding-top: 1rem;
			padding-bottom: 1rem;
			margin: 0 auto;
		}

		.hero-text {
			flex: 0 0 66%;
		}

		.social-links {
			flex-shrink: 0;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.social-links a:hover span {
			background-color: var(--dark);
		}
	}
</style>
