import { page, userEvent } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Skills from './skills.svelte';

describe('skills.svelte', () => {
	it('renders the Main Skills heading', async () => {
		render(Skills);
		await expect
			.element(page.getByRole('heading', { name: 'Main Skills' }))
			.toBeInTheDocument();
	});

	it('renders all skill chips', async () => {
		render(Skills);
		await expect.element(page.getByText('HTML')).toBeInTheDocument();
		await expect.element(page.getByText('CSS')).toBeInTheDocument();
		await expect.element(page.getByText('JavaScript')).toBeInTheDocument();
		await expect.element(page.getByText('TypeScript')).toBeInTheDocument();
		await expect.element(page.getByText('React')).toBeInTheDocument();
		await expect.element(page.getByText('Svelte')).toBeInTheDocument();
		await expect.element(page.getByText('Agile / SCRUM')).toBeInTheDocument();
	});

	it('skill chips are collapsed by default', async () => {
		render(Skills);
		const openCount = await page
			.getByRole('heading', { name: 'Main Skills' })
			.evaluate((el) => el.ownerDocument.querySelectorAll('details[open]').length);
		expect(openCount).toBe(0);
	});

	it('clicking a skill chip expands it', async () => {
		render(Skills);
		// "Svelte" is an exact match for only one summary in the list
		await userEvent.click(page.getByText('Svelte', { exact: true }));
		const isOpen = await page
			.getByText('Svelte', { exact: true })
			.evaluate((el) => el.closest('details')?.hasAttribute('open') ?? false);
		expect(isOpen).toBe(true);
	});
});
