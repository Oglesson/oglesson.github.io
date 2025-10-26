<nav>
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

	@media (min-width: 600px) {
		nav {
			width: 80vw;
		}
	}
</style>
