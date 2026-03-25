import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Projects from './projects.svelte';

describe('projects.svelte', () => {
	it('renders the Projects heading', async () => {
		render(Projects);
		await expect.element(page.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
	});

	it('renders the Chronology project card', async () => {
		render(Projects);
		await expect.element(page.getByRole('heading', { name: 'Chronology' })).toBeInTheDocument();
	});

	it('renders the Prosecco project card', async () => {
		render(Projects);
		await expect.element(page.getByRole('heading', { name: 'Prosecco' })).toBeInTheDocument();
	});

	it('Chronology card links to its project page', async () => {
		render(Projects);
		await expect
			.element(page.getByRole('link', { name: /Chronology/ }))
			.toHaveAttribute('href', expect.stringContaining('chronology'));
	});

	it('Prosecco card links to its project page', async () => {
		render(Projects);
		await expect
			.element(page.getByRole('link', { name: /Prosecco/ }))
			.toHaveAttribute('href', expect.stringContaining('prosecco'));
	});
});
