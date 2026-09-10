<script lang="ts">
	import Mainlayout from '$lib/mainlayout.svelte';
	import SocialIcons from '$lib/socialicons.svelte';
	import { SITE_URL, SITE_NAME } from '$lib/site';

	const aboutImage = '/soglesson.jpg';

	const title = 'About | Sophie Oglesson';
	const description =
		'About Sophie Oglesson — product developer and strategist with 20+ years building better web experiences across industries.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="{SITE_URL}/about" />
</svelte:head>

<Mainlayout>
	<div class="about-page">
		<h1>About</h1>

		<section class="about-intro">
			<div class="about-image">
				<img src={aboutImage} alt="Sophie Oglesson" />
			</div>

			<div class="about-text">
				<h2>Who I am</h2>
				<p>
					I'm a delivery-focused technologist based in Northamptonshire, with over twenty
					years across SaaS, public sector adjacent and regulated enterprise environments.
					For most of that time I was writing the front-end code. Increasingly, the work I
					care about most sits one level up: gathering requirements, structuring scope and
					coordinating sprint delivery (to name a just a handful) and acting as the
					trusted bridge between engineering teams and the stakeholders who depend on
					them.
				</p>

				<h2>Why the pivot</h2>
				<p>
					Twenty years of hands-on front-end engineering taught me how software actually
					gets built, not just how it gets planned. Working within a variety of team sizes
					and structures gave me a passion for practical and well thought out processes,
					seeing the risks in things like knowledge gaps and being able to pre-empt
					weaknesses in projects before they become an issue. I would now like to pursue
					this as a focus and not just as something to understand as part of development.
				</p>
				<!--<p>
					For my last role, restricted in team size and lacking some expertise on project
					and task managment, I stepped in to assist alongside my normal code building
					responsibilities
				</p>

				Working at scale Six years at Virgin Media took me across three product teams, each
				with its own stakeholders, stack and rhythm: a customer self-service platform, a B2B
				wholesale tool, and the main ecommerce site. That stretch also taught me how to hold
				delivery together under real pressure, including a six-week GDPR compliance release
				across multiple products with overnight testing and no room for slippage. Where I'd
				like to go next Earlier in my career, a year at Squiz working with public sector
				clients (Land Registry, the Bodleian Libraries, the University of Hertfordshire)
				gave me a taste of consultancy-style delivery: requirements workshops, functional
				specifications, and acting as the technical-to-business bridge. That variety and
				structure is what draws me toward Technical Product Management and Delivery Manager
				roles now. Outside work [Keep or trim depending on tone you want the page to strike]
				I volunteer at a large-scale live action roleplay event with 800+ participants,
				handling participant queries, escalations and on-the-ground problem solving, a
				strange but genuine exercise in stakeholder management under pressure. I've also
				trained in functional fitness (Olympic lifting and powerlifting) for over twelve
				years, which shaped how I think about consistency and incremental progress in
				delivery work too.-->

				<div class="about-social">
					<SocialIcons color="var(--dark)" layout="row" />
				</div>
			</div>
		</section>
	</div>
</Mainlayout>

<style>
	.about-page {
		padding: 1rem;
	}

	.about-page > h1 {
		font-size: 1.5em;
		margin-bottom: 0.83em;
	}

	.about-intro {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.about-image {
		/* keep the portrait from dominating the viewport on narrow screens */
		max-width: 280px;
	}

	.about-image img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 4px;
	}

	.about-text :global(p) {
		line-height: 1.6;
		margin: 0 0 1.25em;
	}

	.about-social {
		margin-top: 1.5rem;
	}

	@media (min-width: 600px) {
		.about-page {
			padding: 2rem 0;
			max-width: var(--screen-body-width, 1200px);
			margin: 0 auto;
		}

		.about-intro {
			flex-direction: row;
			align-items: flex-start;
			gap: 2.5rem;
		}

		.about-image {
			flex: 0 0 33%;
			max-width: 33%;
		}

		.about-text {
			flex: 1;
		}
	}
</style>
