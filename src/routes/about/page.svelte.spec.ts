import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/about/+page.svelte', () => {
	it('renders the About heading', async () => {
		render(Page);
		await expect
			.element(page.getByRole('heading', { level: 1, name: 'About' }))
			.toBeInTheDocument();
	});

	it('renders the portrait image', async () => {
		render(Page);
		await expect
			.element(page.getByRole('img', { name: 'Sophie Oglesson' }))
			.toBeInTheDocument();
	});

	it('renders the social icon links in the page body', async () => {
		render(Page);
		// scoped to <main> so the footer's own social links don't clash
		const main = page.getByRole('main');
		await expect.element(main.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
		await expect.element(main.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
		await expect.element(main.getByRole('link', { name: 'Email' })).toBeInTheDocument();
	});
});
