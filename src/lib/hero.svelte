<script>
	let open = $state(false);
</script>

<section class="hero">
	<h2>Hi, I'm <span>Sophie Oglesson</span></h2>
	<p>Web Developer | Problem Solver</p>
	<ul>
		<li>
			<a href="http://oglesson.bsky.social" aria-label="Bluesky"
				><span data-icon="bluesky">Bluesky</span></a
			>
		</li>
		<li>
			<a href="http://www.linkedin.com/in/sophie-oglesson" aria-label="LinkedIn"
				><span data-icon="linkedin">LinkedIn</span></a
			>
		</li>
		<li>
			<a href="http://github.com/sophie-oglesson" aria-label="GitHub"
				><span data-icon="github">github</span></a
			>
		</li>
	</ul>
</section>

<style>
	.hero {
		background: linear-gradient(90deg, var(--dark) 0%, var(--medium) 100%);
		color: #fff;
		padding: 4rem 2rem;
		text-align: center;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0 0;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}
</style>
