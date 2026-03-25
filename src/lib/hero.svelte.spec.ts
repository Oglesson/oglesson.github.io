import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Hero from './hero.svelte';

describe('hero.svelte', () => {
	it('renders Sophie Oglesson name', async () => {
		render(Hero);
		await expect.element(page.getByText('Sophie Oglesson')).toBeInTheDocument();
	});

	it('renders the job title', async () => {
		render(Hero);
		await expect
			.element(page.getByRole('heading', { level: 3 }))
			.toHaveTextContent('Product Developer');
	});

	it('renders the Bluesky link', async () => {
		render(Hero);
		await expect.element(page.getByRole('link', { name: 'Bluesky' })).toBeInTheDocument();
	});

	it('renders the LinkedIn link', async () => {
		render(Hero);
		await expect.element(page.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
	});

	it('renders the GitHub link', async () => {
		render(Hero);
		await expect.element(page.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
	});

	it('renders the Email link', async () => {
		render(Hero);
		await expect.element(page.getByRole('link', { name: 'Email' })).toBeInTheDocument();
	});

	it('social links open in a new tab', async () => {
		render(Hero);
		await expect.element(page.getByRole('link', { name: 'Bluesky' })).toHaveAttribute(
			'target',
			'_blank'
		);
	});
});
