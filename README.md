# SMM Platform — Landing Page

A landing page for a social media management platform, built with **Next.js (App Router)**, **Tailwind CSS v4**, **TypeScript** and **lucide-react**.

Design reference: [Outcrowd — Landing page design for a social media management platform](https://dribbble.com/shots/26366091-Landing-page-design-for-a-social-media-management-platform)

## Getting started

```bash
npm install
npm run dev    # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`.

## Project structure

```
app/
  layout.tsx        # Root layout: fonts + metadata
  page.tsx          # Assembles the page from section components
  globals.css       # Design tokens (brand palette) + base styles
components/
  ui/               # Reusable primitives shared across sections
    Button.tsx      # Button / ButtonLink with variant + size options
  layout/           # Page chrome
    Navbar.tsx      # Sticky top navigation
    Footer.tsx      # Site footer
  sections/         # One file per landing-page section
    Hero.tsx
    ...             # see app/page.tsx for the full order
lib/
  content.ts        # All copy/text data (kept out of components)
```

### Conventions

- **Colors** — only use the brand tokens defined in `app/globals.css`
  (`paper`, `ink`, `indigo`, `crimson`, `violet`, `amber`, `mist`),
  e.g. `bg-indigo text-paper`. No hardcoded hex values in components.
- **Section components** are server components unless they need interactivity.
- **Copy lives in `lib/content.ts`** so components stay presentational.
- **Icons** come from `lucide-react` only.
