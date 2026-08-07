# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build (static output to /build)
npm run preview      # Preview production build
npm run lint         # Prettier check + ESLint
npm run format       # Auto-format with Prettier
npm run check        # Svelte type checking
npm run test         # Run all tests once (CI mode)
npm run test:unit    # Run tests in watch mode
```

Run a single test file:

```bash
npx vitest run src/lib/hero.svelte.spec.ts
```

## Architecture

**Static SvelteKit site** — `adapter-static` outputs plain HTML to `/build`. No server-side runtime.

### Routing

Each route under `src/routes/` corresponds to a page. Project detail pages live at `/chronology`, `/chore-tracker`, etc. The root layout (`+layout.svelte`) imports global styles and wraps content in `MainLayout`.

### Component Structure

`src/lib/` holds all components. The homepage (`+page.svelte`) composes `Hero`, `Skills`, and `Projects`. Project detail pages use `ProjectPg` as a wrapper. `SiteHeader` and `Footer` are rendered by `MainLayout`.

### Page titles / SEO

Every route sets its own `<svelte:head><title>…</title><meta name="description" …></svelte:head>` rather than sharing mutable state — this site is prerendered (`export const prerender = true`), and all routes are built in a single Node process, so a shared/mutable title store leaks its last-written value into whichever page renders next. `+layout.svelte` only provides a fallback title, which any page-level `<svelte:head>` overrides. Project detail pages set `pTitle`/`pDescription` props on `ProjectPg`, which renders the head tags once for all of them.

### Styling

CSS variables are defined in `src/lib/styles/maintheme.css` (colors, fonts) and imported globally via the root layout. Components use scoped `<style>` blocks. The mobile breakpoint is `600px`.

## Testing

Tests use **Vitest** with two projects:

- **Browser** (`*.svelte.spec.ts`): Runs in Chromium via Playwright, uses `vitest-browser-svelte` to render components. Setup in `vitest-setup-client.ts`.
- **Server** (`*.spec.ts`, excluding `.svelte.spec.ts`): Runs in Node.

## Code Style

Prettier config: tabs, single quotes, no trailing commas, 100-char print width. ESLint uses the flat config format (`eslint.config.js`).
