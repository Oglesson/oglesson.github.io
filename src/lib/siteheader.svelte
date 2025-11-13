<script>
	let open = $state(false);
</script>

<header id="top">
	<h1>Sophie Oglesson</h1>
	<nav class={open ? 'open' : ''}>
		<ul>
			<li><a href="#top">Home</a></li>
			<li><a href="#aboutme">About</a></li>
			<li><a href="#skills">Skills</a></li>
			<li>
				<a href="#projects">Projects</a>
				<ul>
					<li><a href="/prosecco">Prosecco</a></li>
					<li><a href="/chronology">Chronology</a></li>
				</ul>
			</li>
		</ul>
	</nav>
	<button
		id="toggle-navigation-btn"
		aria-label="Toggle Navigation"
		onclick={() => (open = !open)}
	>
		{open ? 'Close Menu' : 'Open Menu'}
	</button>
</header>

<style>
	header {
		background: var(--dark);
		color: var(--textlight);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}

	nav {
		height: 0;
		overflow: hidden;
	}

	nav.open {
		height: 100%;
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
		z-index: 10;
	}

	nav a {
		color: var(--textlight);
		margin-left: 2rem;
		text-decoration: none;
		transition: color 0.3s;
	}
	nav a:hover {
		color: var(--accent);
	}

	button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 11;
		background-color: var(--lightest);
		border-radius: 10rem;
		border: none;
		/*
				padding: 0;

		display: inline-block;
		height: 3rem;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z'/%3E%3C/svg%3E");
		background-color: var(--textlight);
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;*/
	}

	@media (min-width: 600px) {
		header {
			padding: 2rem;
		}
		h1 {
			flex-grow: 1;
			margin: 0;
		}

		nav {
			height: initial;
		}

		nav ul {
			margin-block-start: 0;
			margin-block-end: 0;
			display: flex;
		}

		nav ul ul {
			margin-block-start: 0;
			margin-block-end: 0;
			display: flex;
			flex-direction: column;
		}

		button {
			display: none;
		}

		header {
			flex-direction: row;
		}
	}
</style>
