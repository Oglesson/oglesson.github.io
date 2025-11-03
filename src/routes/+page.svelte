<script>
	import SiteHeader from '$lib/siteheader.svelte';
	import Hero from '$lib/hero.svelte';
	import Projects from '$lib/projects.svelte';
	import Footer from '$lib/footer.svelte';
	import Skills from '$lib/skills.svelte';
</script>

<SiteHeader />
<main>
	<Hero />
	<Skills />
	<Projects />
	<!--<section id="about">
		<p>Bare with me whilst I pick up svelte and re do some things between life and work.</p>
		<p>
			<a href="http://oglesson.bsky.social" aria-label="Bluesky"><span>Bluesky</span></a>,
			<a href="http://www.linkedin.com/in/sophie-oglesson" aria-label="LinkedIn"
				><span data-icon="linkedin">LinkedIn</span></a
			>
			and
			<a href="http://github.com/sophie-oglesson" aria-label="GitHub"><span>github</span></a>
		</p>
	</section>
	<section id="work">
		<p>Work samples.</p>
	</section>-->
</main>

<Footer />

<style>
	/*header,
	main {
		padding: 1rem;
	}

	h1 {
		padding: 0;
		margin: 0;
	}

	main {
		height: stretch;
	}*/
</style>
