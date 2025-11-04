<script>
	let open = $state(false);
</script>

<section class="hero">
	<h2>Hi, I'm <strong>Sophie Oglesson</strong></h2>
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
			<a href="http://github.com/Oglesson" aria-label="GitHub"
				><span data-icon="github">github</span></a
			>
		</li>
	</ul>
</section>

<style>
	.hero {
		background: linear-gradient(90deg, var(--textdark) 0%, var(--medium) 100%);
		color: var(--textlight);
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

	.hero a {
		color: transparent;
	}

	.hero span {
		color: transparent;
		display: inline-block;
		width: 2.5rem;
		height: 2.5rem;
		background-color: var(--textlight);
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
</style>
