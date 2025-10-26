<script>
	import Mainnav from '$lib/mainnav.svelte';
</script>

<header>
	<h1>Oglesson.com</h1>

	<Mainnav />
</header>
<main>
	<div id="about">
		<p>Bare with me whilst I pick up svelte and re do some things between life and work.</p>
		<p>
			<a href="http://oglesson.bsky.social" aria-label="Bluesky"><span>Bluesky</span></a>,
			<a href="http://www.linkedin.com/in/sophie-oglesson" aria-label="LinkedIn"
				><span data-icon="linkedin">LinkedIn</span></a
			>
			and
			<a href="http://github.com/sophie-oglesson" aria-label="GitHub"><span>github</span></a>
		</p>
	</div>
	<div id="work-samples">
		<p>Work samples.</p>
	</div>
</main>

<style>
	header,
	main {
		padding: 1rem;
	}

	h1 {
		padding: 0;
		margin: 0;
	}

	main {
		height: stretch;
	}
</style>
