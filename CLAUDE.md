# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing website for **KUK-CO d.o.o.** (Solin, HR) — an electrical-installation company (*elektroinstalacije jake i slabe struje*). Single page, Croatian-language, built with hand-written HTML + vanilla JS, styled with Tailwind CSS compiled via Bun. No framework, no router, no backend.

## Commands

Package manager is **Bun** (not npm/node — `package.json` scripts call `bunx`).

```bash
bun install        # install dev deps (tailwindcss only)
bun run dev        # Tailwind in watch mode → assets/css/styles.css
bun run build      # minified production CSS (run before committing CSS-affecting changes)
bun run serve      # static preview server (bunx serve)
```

There are no tests, linters, or CI.

## Architecture

- **`index.html`** — the entire site. All sections live here (hero, o-nama, usluge, proces, reference, kontakt, footer), each an `<section>` with an `id` used by the in-page anchor nav. There are no other pages.
- **`src/input.css`** → **`assets/css/styles.css`** — Tailwind source compiles to the served stylesheet. `styles.css` is generated and committed; **never edit it by hand** — edit `input.css` (or `tailwind.config.js`) and rebuild.
- **`assets/js/main.js`** — vanilla IIFE, no dependencies. Mobile menu, scroll-reveal, animated stat counters, sticky-header shadow.
- **`tailwind.config.js`** — custom theme: `ink` (navy), `brand` (blue), `electric` (amber) color scales; `Inter`/`Sora` fonts; custom `container-x`, `btn-*`, `card`, `eyebrow`, `.reveal` defined in `input.css` under `@layer components`.

### Two conventions that matter

1. **Tailwind purges against `content: ["./index.html", "./assets/js/**/*.js"]`.** If `main.js` adds a class dynamically (e.g. `bg-ink-950/90` toggled on scroll), that class must appear literally in a scanned file or it gets purged out of the build. When adding dynamic classes, also run `bun run build`.

2. **Scroll-reveal is progressive enhancement.** `main.js` adds `.js` to `<html>` (via an inline script in `<head>`), and `input.css` only hides `.reveal` elements *under* `.js`. This keeps all content visible if JS is disabled or fails — do not move the hidden state out from under the `.js` scope.

## SEO / metadata (keep in sync when content changes)

`index.html` `<head>` carries title/meta, Open Graph + Twitter tags, and a JSON-LD `Electrician` block (address, geo, hours, VAT/OIB). Company facts (address, phones, emails, OIB `89961975037`, est. 1993) are duplicated across the JSON-LD, the Kontakt section, and the footer — update all occurrences together. Also maintained: `sitemap.xml`, `robots.txt`, `site.webmanifest`, `favicon.svg`, `assets/og-image.svg`.

## Notes

- Contact form posts to **FormSubmit** (`action="https://formsubmit.co/jakov@kuk-co.hr"`); first submission requires a one-time email confirmation. No server-side code in this repo.
- `500+ projekata` stat and `Pon–Pet 07:00–15:00` hours are placeholders pending real figures.
- Deploy is just static file hosting; publish everything except `node_modules/` and `src/`.
