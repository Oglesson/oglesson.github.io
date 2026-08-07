import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Footer from './footer.svelte';

describe('footer.svelte', () => {
	it('renders the email contact link', async () => {
		render(Footer);
		await expect.element(page.getByRole('link', { name: /Email me/ })).toBeInTheDocument();
	});

	it('email contact link points to the correct email address', async () => {
		render(Footer);
		await expect
			.element(page.getByRole('link', { name: /Email me/ }))
			.toHaveAttribute('href', 'mailto:sophie@oglesson.com');
	});

	it('renders a copyright notice', async () => {
		render(Footer);
		await expect.element(page.getByText(/Sophie Oglesson/)).toBeInTheDocument();
	});
});
