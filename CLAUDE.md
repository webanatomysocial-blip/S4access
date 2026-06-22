# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start Next.js development server
npm run build        # Build static export → out/ (runs generate-sitemap.js automatically via postbuild)
npm run lint         # Run ESLint
npm run build-sitemap  # Regenerate sitemap only (reads src/blogs/metadata.js)
```

There are no tests in this project. `npm run start` is not useful here — the site is a static export (`output: "export"` in next.config.mjs), so serve the `out/` directory directly when you need to preview a production build.

## Architecture

This is a **Next.js 16 App Router static site** (`output: "export"`) for s4access, an SAP access management consultancy. It was migrated from Vite/React Router — some legacy files remain (`src/App.jsx`, `src/AppRoutes.jsx`, `src/entry-client.jsx`, `src/main.jsx`, `src/pages_old/`) and should be ignored; the live app lives entirely in `src/app/`.

### Routing

All pages are under `src/app/` using the Next.js App Router file-system convention:

- `src/app/layout.jsx` — root layout: imports Bootstrap, global CSS, wraps everything in `<LenisProvider>` (smooth scroll), `<Header>`, `<Footer>`, `<ScrollToTop>`
- `src/app/page.jsx` — homepage
- `src/app/[section]/page.jsx` — static pages (about, careers, contact, services, insights, customer-success, quiz, links, s4accessprojects)
- `src/app/services/[service-slug]/page.jsx` — individual service detail pages
- `src/app/customer-success/[case-slug]/page.jsx` — individual customer success case pages
- `src/app/blogs/[slug]/page.jsx` — dynamic blog post pages (statically pre-rendered)

### Blog system

Blogs are **not CMS-driven** — each post is a standalone JSX component in `src/blogs/`. The registry is `src/blogs/metadata.js`, which exports `blogMetadata` (array of `{id, title, slug, excerpt, metaDescription, image, date, keywords?}`).

To add a new blog:
1. Create `src/blogs/Your-Blog-Title.jsx` with the post content as a React component
2. Add an entry to `blogMetadata` in `src/blogs/metadata.js`
3. Add a static import and map entry for the slug in `src/app/blogs/[slug]/page.jsx` — both the import and the `blogComponentMap` object must be updated manually (Next.js static export requires this explicit mapping)

The `generateStaticParams()` in the blog page reads `blogMetadata` to pre-render all slugs. Blog images go in `src/blogs/blogs-images/`.

### Customer Success pages

Follows the same pattern as blogs. Case metadata lives in `src/coustomer-pages/metadata.js` (note the typo: `coustomer`). Each case has its own page at `src/app/customer-success/[slug]/page.jsx`.

### Styling

CSS is plain (no Tailwind, no CSS modules). Per-section files live in `src/css/`. Bootstrap 5 is loaded globally in the root layout. Component-scoped overrides are sometimes co-located (e.g., `src/components/CustomerSuccessonebyone.css`, `src/blogs/Internal-Blog.css`).

### Client components

Next.js server components are the default. Components requiring browser APIs (scroll listeners, state, effects) must have `"use client"` at the top — `Header`, `ContactForm`, `LenisProvider`, `HomeSlider`, and most interactive components already do.

### Contact form

`src/components/ContactForm.jsx` uses EmailJS directly from the browser (service ID, template ID, and public key are hardcoded in the file). There is no backend for form submission.

### Deployment

The site is deployed as a static export. `npm run build` outputs to `out/`. The `.cpanel.yml` file shows cPanel deployment copies `dist/*` to the server — the `out/` directory maps to this. The `.htaccess` routes all requests through `index.php` (for the legacy PHP wrapper) with a special rule routing `sitemap.xml` to `sitemap.php`.

### Sitemap

`generate-sitemap.js` runs post-build. It reads `src/blogs/metadata.js` via regex (not import, to avoid needing a bundler for this script) and writes `dist/sitemap.xml`. When deployed, `sitemap.php` at the root serves the XML dynamically.
