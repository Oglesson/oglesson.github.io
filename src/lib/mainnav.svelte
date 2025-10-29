<script>
	let open = $state(false);
</script>

<nav class={open ? 'open' : ''}>
	<ul>
		<li><a href="#about">Home</a></li>
		<li>
			<a href="#work">Work Samples</a>
			<ul>
				<li><a href="/ruby">Ruby</a></li>
				<li><a href="/habit-tracker">Habit Tracker</a></li>
			</ul>
		</li>
	</ul>
</nav>
<button onclick={() => (open = !open)}>
	{open ? 'Close Menu' : 'Open Menu'}
</button>

<!-- this needs styling -->

<style>
	nav {
		height: 0;
		overflow: hidden;
	}

	nav.open {
		background-color: var(--dark);
		padding: 1rem;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
		opacity: 0.95;
	}

	a {
		color: var(--light);
		text-decoration: none;
		padding: 0.5rem;
	}
	button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 11;
	}

	@media (min-width: 600px) {
		nav {
			width: 80vw;
		}
	}
</style>
