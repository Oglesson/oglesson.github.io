import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Projectpg from './projectpg.svelte';

describe('projectpg.svelte', () => {
	it('renders the default fallback content when no children are provided', async () => {
		render(Projectpg);
		await expect.element(page.getByText('info about a project.')).toBeInTheDocument();
	});

	it('renders the site header inside the layout', async () => {
		render(Projectpg);
		await expect
			.element(page.getByRole('heading', { level: 1, name: 'Oglesson.com' }))
			.toBeInTheDocument();
	});

	it('renders the footer inside the layout', async () => {
		render(Projectpg);
		await expect.element(page.getByRole('link', { name: 'Contact Me' })).toBeInTheDocument();
	});
});
