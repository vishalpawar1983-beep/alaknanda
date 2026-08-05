# Alaknanda Ship Management — Corporate Website

Marketing and lead-generation site for **Alaknanda Ship Management Pvt. Ltd.**, a certified crewing and manning agency based in Zirakpur, Mohali, Punjab.

Built on **Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Motion**.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in SMTP credentials
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (flat config) |
| `npm run typecheck` | `tsc --noEmit` |

> **Note on Next.js 16.** Turbopack is the default for `dev` and `build`; `next lint` has been removed in favour of the ESLint CLI; `params`/`searchParams` are Promises; and `middleware` is now `proxy`. See `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`.

---

## Project structure

```
app/
  layout.tsx              Root layout — fonts, global JSON-LD, header/footer, lead widgets
  page.tsx                Home
  about/ services/ blog/ careers/ contact/ faq/ gallery/ testimonials/
  privacy-policy/ terms/ refund-policy/ cookie-policy/ disclaimer/
  services/[slug]/        Generated from lib/services.ts (SSG)
  blog/[slug]/            Generated from lib/blog/ (SSG)
  api/enquiry|careers|newsletter/route.ts
  sitemap.ts robots.ts opengraph-image.tsx not-found.tsx

components/
  layout/                 Header (mega menu), Footer, PageHero, StickyActions, ExitIntent, LegalPage
  sections/               Home + inner page sections
  forms/                  Enquiry, Career, Newsletter (React Hook Form + Zod)
  blog/                   PostCard, PostCover, BlockRenderer
  ui/                     Button, Section, Field, Accordion
  motion/                 Reveal, RevealGroup, Counter
  brand/                  Logo, OceanBackdrop
  seo/                    JsonLd

lib/
  site.ts                 Company identity, NAP data, navigation  ← single source of truth
  services.ts             Service catalogue + per-service page copy and FAQs
  content.ts              Stats, certifications, differentiators, process, testimonials, gallery
  positions.ts            Ranks, departments, vessel types, industries
  faqs.ts                 30 site-wide FAQs
  legal.ts                Five policy documents
  blog/                   types.ts, index.ts (registry), posts/*.ts
  seo.ts                  Metadata builder + all JSON-LD builders
  validation.ts           Zod schemas shared by client and server
  rate-limit.ts           In-memory fixed-window limiter
  mailer.ts               SMTP delivery via nodemailer
```

### Content lives in `lib/`, not in JSX

Every page reads its copy from a typed module in `lib/`. Nothing is hardcoded in a component. This keeps the site **CMS-ready**: the block model in `lib/blog/types.ts` mirrors a headless-CMS rich-text field (Sanity portable text, Contentful, Strapi), so migrating means replacing the data source, not the rendering layer.

---

## Common tasks

### Change the phone number, address or email

Edit `lib/site.ts`. It feeds the header, footer, contact page, JSON-LD, `tel:`/`mailto:` links and WhatsApp deep links — NAP consistency is maintained automatically.

### Add a service

Append a `Service` object to `services` in `lib/services.ts`. The page at `/services/<slug>`, its metadata, `Service` + `FAQPage` schema, the nav mega-menu, the home grid and the sitemap entry are all generated from it.

### Publish a blog post

1. Create `lib/blog/posts/<slug>.ts` exporting `export const post: BlogPost = { ... }`.
2. Import and register it in the `registry` array in `lib/blog/index.ts`.

Index listing, category grouping, related-post links, reading time, `BlogPosting` + `FAQPage` schema and the sitemap entry follow automatically.

### Replace the placeholder artwork

Hero, gallery tiles and blog covers use generated inline SVG rather than stock photography, so the site currently ships with **zero image weight**. To use real photographs:

- **Gallery** — drop files into `public/gallery/` and swap the inline `<svg>` in `components/sections/gallery-grid.tsx` for `next/image`. Layout, filters and animation are unaffected.
- **Blog covers** — replace `components/blog/post-cover.tsx` with `next/image` and add an `image` field to `BlogPost`.
- **Hero** — `components/sections/hero.tsx` (`VesselScene`) can be replaced with a full-bleed `next/image` or a `<video>` element.

---

## Forms, security and delivery

All three forms share one Zod schema per form between browser and server (`lib/validation.ts`), so a bypassed client cannot widen what the API accepts.

Each route handler applies:

- **Rate limiting** — 5 enquiries / 10 min, 3 applications / 10 min, 3 newsletter signups / hour, per IP (`lib/rate-limit.ts`).
- **Same-origin check** — cross-origin POSTs are rejected (CSRF).
- **Honeypot** — an off-screen `company_website` field; filled submissions are accepted silently so bots learn nothing.
- **Server-side validation** — 422 with per-field errors.

Security headers (CSP, HSTS, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) are set for every response in `next.config.ts`. The CSP allow-lists only Google Analytics, Google Maps and the Meta Pixel.

> **reCAPTCHA** is not wired up. The honeypot plus rate limiting handles ordinary spam without adding a third-party script or a consent obligation. If volume later justifies it, add reCAPTCHA v3 as a token check inside the existing route handlers — the validation seam is already there.

Email delivery uses SMTP via nodemailer. **If SMTP is not configured the forms still return success and the submission is logged to the server console** — this keeps local development working, so remember to set the credentials before launch.

---

## SEO

- Per-page `title`, description, canonical, Open Graph and Twitter cards via `buildMetadata()`.
- Structured data: `Organization`, `ProfessionalService` (LocalBusiness), `WebSite`, `Service`, `BreadcrumbList`, `FAQPage`, `BlogPosting`, `Review`/`AggregateRating`.
- `app/sitemap.ts` generates all 28 URLs with intent-weighted priorities; `app/robots.ts` emits robots.txt.
- Dynamic 1200×630 OG image from `app/opengraph-image.tsx`.
- Local SEO: consistent NAP, `GeoCoordinates`, `OpeningHoursSpecification` and an embedded Google Map on `/contact`.

Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to complete Search Console verification.

---

## Accessibility

Skip link, one `<h1>` per page, semantic landmarks, visible focus rings, `aria-expanded`/`aria-controls` on all disclosures, labelled form fields with `aria-invalid` and `role="alert"` errors, keyboard-operable carousel with autoplay paused on hover and focus, and a global `prefers-reduced-motion` rule that neutralises every decorative animation.

---

## Deployment (Vercel)

1. Push the repository and import it in Vercel — the framework preset is detected automatically.
2. Add the environment variables from `.env.example` to Production and Preview.
3. Add the custom domain and set `NEXT_PUBLIC_SITE_URL` to match it exactly.
4. Submit `https://<domain>/sitemap.xml` in Google Search Console.

---

## Known gaps

These are deliberate and documented rather than hidden:

- **Blog content — 6 of 25 articles written.** The architecture, schema, routing, related-post linking and sitemap integration are complete and production-ready; 19 further articles remain to be authored. Add each as one file in `lib/blog/posts/` registered in `lib/blog/index.ts`.
- **Imagery is generated SVG**, not photography. See “Replace the placeholder artwork” above.
- **Newsletter signups are emailed, not stored.** Connect Mailchimp/Brevo inside `app/api/newsletter/route.ts` when a provider is chosen.
- **Testimonials, statistics and certifications are representative placeholders.** Replace with verified figures in `lib/content.ts` before launch — `AggregateRating` schema asserting unverified review counts is a Google policy risk.
- **Social profile URLs in `lib/site.ts` are assumed.** Correct them before launch or remove the entries.
- **reCAPTCHA and Google Calendar** from the original brief are not integrated (see the note above on reCAPTCHA).
