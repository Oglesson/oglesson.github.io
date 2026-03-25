import { page, userEvent } from '@vitest/browser/context';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import SiteHeader from './siteheader.svelte';

describe('siteheader.svelte', () => {
	afterEach(() => vi.unstubAllGlobals());
	it('renders the site title', async () => {
		render(SiteHeader);
		await expect
			.element(page.getByRole('heading', { level: 1, name: 'Oglesson.com' }))
			.toBeInTheDocument();
	});

	it('renders main navigation links', async () => {
		render(SiteHeader);
		await expect.element(page.getByRole('link', { name: 'About' })).toBeInTheDocument();
		await expect.element(page.getByRole('link', { name: 'Skills' })).toBeInTheDocument();
		await expect.element(page.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
	});

	it('renders project submenu items in the DOM', async () => {
		render(SiteHeader);
		await expect.element(page.getByRole('link', { name: 'Prosecco' })).toBeInTheDocument();
		await expect.element(page.getByRole('link', { name: 'Chronology' })).toBeInTheDocument();
	});

	it('opens the mobile nav when the hamburger button is clicked', async () => {
		render(SiteHeader);
		const toggleBtn = page.getByRole('button', { name: 'Toggle Navigation' });
		await userEvent.click(toggleBtn);
		await expect.element(page.getByRole('navigation')).toHaveClass('open');
	});

	it('adds projects-open class when Projects is clicked on desktop', async () => {
		vi.stubGlobal('innerWidth', 1280);
		render(SiteHeader);

		await userEvent.click(page.getByRole('link', { name: 'Projects' }), { force: true });

		expect(document.querySelector('.projects-item')?.classList.contains('projects-open')).toBe(
			true
		);
	});

	it('removes projects-open class when Projects is clicked a second time', async () => {
		vi.stubGlobal('innerWidth', 1280);
		render(SiteHeader);
		const projectsLink = page.getByRole('link', { name: 'Projects' });

		await userEvent.click(projectsLink, { force: true });
		await userEvent.click(projectsLink, { force: true });

		expect(document.querySelector('.projects-item')?.classList.contains('projects-open')).toBe(
			false
		);
	});
});
