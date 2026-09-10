<script>
	import SocialIcons from '$lib/socialicons.svelte';
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
		<div class="hero-social">
			<SocialIcons color="var(--textlight)" layout="row-then-column" />
		</div>
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

	.hero-social {
		display: flex;
		justify-content: center;
		margin-top: 1rem;
	}

	#aboutme {
		height: 0;
		overflow: hidden;
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

		.hero-social {
			flex-shrink: 0;
			margin-top: 0;
		}
	}
</style>
