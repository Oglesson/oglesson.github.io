<!-- Not sure if this is actually needed but there you go-->
<script>
	import { resolve } from '$app/paths';
	import { socialLinks } from '$lib/social-links';
</script>

<footer>
	<div class="footer-container">
		<div class="footer-col contact-col">
			<h2>Get In Touch</h2>
			<ul class="footer-links">
				{#each socialLinks as link (link.id)}
					<li>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- entries in social-links.ts are always external URLs -->
						<a href={link.href} target="_blank" rel="noopener external me"
							>{link.label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<div class="footer-col project-col">
			<h2>Projects</h2>
			<ul class="footer-links">
				<li><a href={resolve('/chronology')}>Chronology</a></li>
				<li><a href={resolve('/chore-tracker')}>Chore Tracker</a></li>
			</ul>
		</div>
		<div class="footer-info">© 2026 Sophie Oglesson</div>
	</div>
</footer>

<style>
	footer {
		background: #3c027d;
		color: var(--textlight);
		text-align: left;
		padding: 2rem 1rem;
		align-self: stretch;
	}

	footer a {
		color: var(--lightest);
	}
	footer a:hover {
		color: var(--accent);
	}

	.footer-col h2 {
		margin: 0 0 1.25rem 0;
		font-size: 1.25rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #fff;
	}

	.footer-col {
		margin-bottom: 2rem;
	}

	.footer-links {
		list-style: none;
		margin: 0 0 0.5rem 0;
		padding: 0;
	}

	.footer-links li {
		margin-bottom: 0.85rem;
	}

	.footer-links li:last-child {
		margin-bottom: 0;
	}

	.footer-info {
		margin-top: 2rem;
	}

	@media (min-width: 600px) {
		footer {
			padding: 2rem 0;
		}

		.footer-container {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			gap: 0.5rem 1rem;
			max-width: var(--screen-body-width, 1200px);
			margin: 0 auto;
		}

		.contact-col {
			grid-column: 1;
		}

		.project-col {
			grid-column: 2;
		}

		.footer-col {
			margin-bottom: 0;
		}

		.footer-links {
			margin-bottom: 0;
		}

		.footer-info {
			grid-column: 1 / -1;
			margin-top: 2rem;
		}
	}
</style>
