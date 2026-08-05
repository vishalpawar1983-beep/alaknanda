# This is NOT the Next.js you know

This project runs **Next.js 16** — APIs, conventions and file structure differ from older training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

Breaking changes that bite most often here:

- Turbopack is the default for `next dev` and `next build`.
- `next lint` is **removed** — lint via the ESLint CLI (`npm run lint`).
- `params` and `searchParams` are **Promises** and must be awaited.
- `middleware.ts` is now `proxy.ts` with a `proxy` export (Node runtime only).
- `revalidateTag` requires a second `cacheLife` argument.
- `images.qualities` defaults to `[75]`; other qualities must be declared in `next.config.ts`.
- `scroll-behavior: smooth` is only managed during navigation when `<html data-scroll-behavior="smooth">` is set.
- Image generation functions (`opengraph-image`, `icon`) receive `params`/`id` as Promises.

## Project conventions

- **Tailwind v4, CSS-first.** All design tokens live in the `@theme` block in `app/globals.css`. There is no `tailwind.config.js`.
- **Content lives in `lib/`, never in JSX.** Pages read typed data modules so the site stays CMS-ready.
- **`lib/site.ts` is the single source of truth** for company name, address, phone and navigation. Never hardcode NAP data in a component.
- **Zod schemas in `lib/validation.ts` are shared** between the browser form and the route handler. Validate on both sides from the same schema.
- Strict TypeScript with `noUncheckedIndexedAccess`. No `any`, no `@ts-ignore`.
- Run `npm run lint` and `npm run build` before considering work complete.
