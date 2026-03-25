<script>
	import { resolve } from '$app/paths';
	let open = $state(false);
	let projectsOpen = $state(false);
</script>

<header id="top">
	<h1><a href="/">Oglesson.com</a></h1>
	<nav class="nav-open {open ? 'open' : ''}">
		<ul>
			<li><a href={resolve('/#aboutme')} onclick={() => (open = !open)}>About</a></li>
			<li><a href={resolve('/#skills')} onclick={() => (open = !open)}>Skills</a></li>
			<li class="projects-item {projectsOpen ? 'projects-open' : ''}">
				<a href={resolve('/prosecco')} onclick={(e) => { if (window.innerWidth >= 600) { e.preventDefault(); projectsOpen = !projectsOpen; } else { open = !open; projectsOpen = false; } }}>Projects</a>
				<button class="projects-toggle" onclick={(e) => { e.preventDefault(); projectsOpen = !projectsOpen; }} aria-label="Toggle Projects Menu">▾</button>
				<ul class="projects-submenu">
					<li>
						<a href={resolve('/prosecco')} onclick={() => { open = !open; projectsOpen = false; }}>Prosecco</a>
					</li>
					<li>
						<a href={resolve('/chronology')} onclick={() => { open = !open; projectsOpen = false; }}>Chronology</a>
					</li>
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
		background: var(--textlight);
		color: var(--dark);
		border-bottom: 1px solid var(--dark);
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
		opacity: 0.95;
		background-color: var(--dark);
	}
	nav.open ul {
		margin-block-end: 0;
		font-size: 2rem;
		background: var(--dark);
		color: var(--textlight);
	}

	nav.open a {
		color: var(--textlight);
	}

	nav.open ul ul {
		margin-left: 1.5rem;
	}

	nav a {
		color: var(--dark);
		margin-left: 3rem;
		text-decoration: none;
		transition: color 0.3s;
		font-weight: 600;
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
		background-color: var(--dark);
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}

	button.menu-open {
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z'/%3E%3C/svg%3E");
		background-color: white;
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}

	@media (min-width: 600px) {
		header {
			padding: 1rem;
		}
		h1 {
			flex-grow: 1;
		}

		nav {
			height: initial;
			overflow: visible;
		}

		nav ul {
			margin-block-start: 0;
			margin-block-end: 0;
			display: flex;
			justify-content: flex-end;
		}

		nav ul ul {
			margin-block-start: 0;
			margin-block-end: 0;
			display: none;
			flex-direction: column;
			position: absolute;
			top: 100%;
			right: 0;
			background: var(--textlight);
			border: 1px solid var(--dark);
			min-width: 10rem;
			z-index: 20;
		}

		.projects-item {
			position: relative;
		}

		.projects-item.projects-open .projects-submenu {
			display: flex;
		}

		.projects-toggle {
			display: none;
		}

		.projects-item > a::after {
			content: '';
			display: inline-block;
			width: 0;
			height: 0;
			border-top: 4px solid transparent;
			border-bottom: 4px solid transparent;
			border-left: 5px solid currentColor;
			margin-left: 0.4rem;
			vertical-align: middle;
			transition: transform 0.2s;
		}

		.projects-item.projects-open > a::after {
			transform: rotate(90deg);
		}

		.projects-submenu a {
			margin-left: 0;
			padding: 0.5rem 1rem;
			display: block;
		}

		nav.open {
			height: initial;
			width: auto;
			position: static;
			top: auto;
			left: auto;
			z-index: auto;
			opacity: 1;
			background-color: transparent;
		}

		nav.open ul {
			font-size: inherit;
			background: transparent;
		}

		button {
			display: none;
		}

		header {
			flex-direction: row;
		}
	}
</style>
