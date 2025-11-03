<script>
	let open = $state(false);
</script>

<header id="top">
	<h1>Sophie Oglesson</h1>
	<nav class={open ? 'open' : ''}>
		<ul>
			<li><a href="#top">Home</a></li>
			<li><a href="#skills">Skills</a></li>
			<li>
				<a href="#projects">Projects</a>
				<ul>
					<li><a href="/ruby">Ruby</a></li>
					<li><a href="/habit-tracker">Habit Tracker</a></li>
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
		background: #3c027d;
		color: #fff;
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
		color: #fff;
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
	}

	@media (min-width: 600px) {
		nav {
			height: initial;
		}

		button {
			display: none;
		}

		header {
			flex-direction: row;
		}
	}
</style>
