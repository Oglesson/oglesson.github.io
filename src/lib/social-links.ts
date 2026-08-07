// Central source of truth for social/contact links, consumed by hero.svelte and footer.svelte.
// Update a URL here and it changes everywhere it's used.

export type SocialLink = {
	id: string;
	/** Visible label text (footer link text, hero's visually-hidden span text) */
	label: string;
	href: string;
	/** aria-label used for the icon-only hero link */
	ariaLabel: string;
	/** Matches the [data-icon] selector in hero.svelte's styles */
	icon: string;
};

export const socialLinks: SocialLink[] = [
	{
		id: 'bluesky',
		label: 'Bluesky',
		href: 'https://oglesson.bsky.social',
		ariaLabel: 'Bluesky',
		icon: 'bluesky'
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/sophie-oglesson',
		ariaLabel: 'LinkedIn',
		icon: 'linkedin'
	},
	{
		id: 'github',
		label: 'github',
		href: 'https://github.com/Oglesson',
		ariaLabel: 'GitHub',
		icon: 'github'
	},
	{
		id: 'email',
		label: 'Email me. sophie@oglesson.com',
		href: 'mailto:sophie@oglesson.com',
		ariaLabel: 'Email',
		icon: 'email'
	}
];
