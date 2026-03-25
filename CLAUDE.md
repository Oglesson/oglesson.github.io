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

Each route under `src/routes/` corresponds to a page. Project detail pages live at `/prosecco`, `/chronology`, etc. The root layout (`+layout.svelte`) imports global styles and wraps content in `MainLayout`.

### Component Structure

`src/lib/` holds all components. The homepage (`+page.svelte`) composes `Hero`, `Skills`, and `Projects`. Project detail pages use `ProjectPg` as a wrapper. `SiteHeader` and `Footer` are rendered by `MainLayout`.

### Shared State

`src/lib/shared.svelte.ts` exports a reactive `pageName` variable (Svelte 5 rune-based) used to set the `<title>` dynamically from any component.

### Styling

CSS variables are defined in `src/lib/styles/maintheme.css` (colors, fonts) and imported globally via the root layout. Components use scoped `<style>` blocks. The mobile breakpoint is `600px`.

## Testing

Tests use **Vitest** with two projects:

- **Browser** (`*.svelte.spec.ts`): Runs in Chromium via Playwright, uses `vitest-browser-svelte` to render components. Setup in `vitest-setup-client.ts`.
- **Server** (`*.spec.ts`, excluding `.svelte.spec.ts`): Runs in Node.

## Code Style

Prettier config: tabs, single quotes, no trailing commas, 100-char print width. ESLint uses the flat config format (`eslint.config.js`).
