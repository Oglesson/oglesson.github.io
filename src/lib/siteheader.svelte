<script>
	let open = $state(false);
</script>

<header id="top">
	<h1>Sophie Oglesson</h1>
	<nav class="nav-open {open ? 'open' : ''}">
		<ul>
			<li><a href="/#top" onclick={() => (open = !open)}>Home</a></li>
			<li><a href="/#aboutme" onclick={() => (open = !open)}>About</a></li>
			<li><a href="/#skills" onclick={() => (open = !open)}>Skills</a></li>
			<li>
				<a href="/prosecco" onclick={() => (open = !open)}>Projects</a>
				<ul>
					<li><a href="/prosecco" onclick={() => (open = !open)}>Prosecco</a></li>
					<li><a href="/chronology" onclick={() => (open = !open)}>Chronology</a></li>
				</ul>
			</li>
		</ul>
	</nav>
	<button
		id="toggle-navigation-btn"
		aria-label="Toggle Navigation"
		onclick={() => (open = !open)}
		class={open ? 'menu-open' : ''}
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

	h1 {
		margin: 0;
	}

	nav {
		height: 0;
		overflow: hidden;
	}

	nav.open {
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		opacity: 0.8;
		background-color: var(--dark);
	}
	nav.open ul {
		margin-block-end: 0;
		font-size: 2rem;
		background: var(--dark);
	}

	nav.open ul ul {
		margin-left: 1.5rem;
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
		padding: 0;
		color: transparent;
		display: inline-block;
		height: 2.3rem;
		width: 2.3rem;
		overflow: hidden;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z'/%3E%3C/svg%3E");
		background-color: var(--textlight);
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}

	button.menu-open {
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z'/%3E%3C/svg%3E");
		background-color: var(--textlight);
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}

	/*@keyframes navOpen {
		0% {
			opacity: 0;
			height: 0;
			width: 0;
		}
		100% {
			opacity: 0.8;
			height: 100%;
			width: 100%;
		}
	}
	@media (max-width: 600px) {
		.nav-open {
			animation-duration: 2s;
			animation-name: navOpen;
		}
	}*/

	@media (min-width: 600px) {
		header {
			padding: 2rem;
		}
		h1 {
			flex-grow: 1;
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

		nav.open {
			opacity: 1;
		}

		button {
			display: none;
		}

		header {
			flex-direction: row;
		}
	}
</style>
