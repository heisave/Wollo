# SMM Platform — Landing Page ("wollo")

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
  layout.tsx        # Root layout: fonts (Figtree + Inter) + metadata
  page.tsx          # Assembles the page from section components
  globals.css       # Design tokens (brand palette) + base styles
components/
  ui/               # Reusable primitives shared across sections
    Button.tsx      # Button / ButtonLink: variant × size × shape
    Logo.tsx        # "wollo" wordmark
  layout/           # Page chrome
    Navbar.tsx      # Sticky nav (switches theme over the illustration, mobile menu)
    Footer.tsx      # Links + social icons
  sections/         # One file per landing-page section
    Hero.tsx
    HeroIllustration.tsx   # Scroll-straightening artwork panel
    Analytics.tsx
    Integrations.tsx
    Statement.tsx
    Stats.tsx
    Testimonials.tsx
    Faq.tsx                # Accordion (client)
    CtaBanner.tsx
    ...             # see app/page.tsx for the full order
lib/
  content.ts        # All copy/text data (kept out of components)
```

## Responsiveness

Verified with no horizontal overflow at **375 px, 768 px and 1440 px**:

- Mobile nav collapses into a dropdown menu below `lg`
- Stats rows stack below `lg` (3-column layout only from `lg` up)
- Chart callouts are positioned in `%` of the SVG viewBox, not pixels
- Decorative artwork is scaled down or hidden where it would crowd text

### Conventions

- **Colors** — UI surfaces/text use the brand tokens from `app/globals.css`
  (`paper`, `shell`, `surface`, `ink`, `muted`, `violet`, `navy`, `rose`,
  `amber`, `gold`, `orange`, `periwinkle`), e.g. `bg-violet text-paper`.
  Raw hex values are allowed only inside decorative SVG artwork.
- **Section components** are server components unless they need interactivity.
- **Copy lives in `lib/content.ts`** so components stay presentational.
- **Icons** come from `lucide-react` (inline SVG only for marks it lacks, e.g. X).
