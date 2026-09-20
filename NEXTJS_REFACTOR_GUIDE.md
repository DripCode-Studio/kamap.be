# Kamap — Next.js refactor guide

This guide moves the current static Kamap landing page to a modern, maintainable stack without changing its content, imagery, fonts, visual identity, or interactions.

## 1. What is in the current project

The original static source is preserved in `old-static-site/`:

- `old-static-site/index.html` — one 409-line landing page
- `old-static-site/style.css` — all styles (1,417 lines)
- `old-static-site/main.js` — translations and browser interactions (537 lines)
- local brand, photo, flag, card, and font assets under `old-static-site/`

The archive also contains a second static-site copy at `old-static-site/kamap.be/`. It has different and older content/behaviour. Do **not** migrate both. Treat `old-static-site/` as the source of truth and remove the archive only after the new site has been accepted.

### Existing sections to preserve

1. Sticky header — logo, tagline, anchor navigation, language picker.
2. Full-screen hero — three background slides, Instagram image carousel, animated headline, CTAs, slide dots.
3. Partner logos.
4. “Nos 3 fondamentaux” — three branded cards, the first usable and the latter two visually locked.
5. “Bientôt disponible” — explanatory content and visually locked email form.
6. About/contact — locked product list, Instagram link, collage images.
7. Footer.

### Existing behaviour to preserve

- FR, NL, EN, ES and DE translations.
- Animated action/keyword in the hero every 8 seconds.
- Hero background changes every 13 seconds; manual dots reset its timer.
- The Instagram image changes with arrows and is associated with the active hero slide.
- The header hides on a meaningful downward scroll and returns while scrolling up.
- Smooth anchor navigation.

The email form currently has no submit handler or data destination. Keep it disabled/locked in the first refactor. Do not introduce an email database or newsletter provider unless that becomes a deliberate product decision.

## 2. Recommended target stack

Use a new **Next.js App Router** project with TypeScript, Tailwind CSS, and shadcn/ui. The App Router gives a clean separation between static server-rendered sections and the few interactive client components. The current Next.js defaults include TypeScript, Tailwind, ESLint, App Router, and the `@/*` import alias. See the official [Next.js installation guide](https://nextjs.org/docs/app/getting-started/installation), [Tailwind + Next.js guide](https://tailwindcss.com/docs/installation/framework-guides/nextjs), and [shadcn/ui Next.js guide](https://ui.shadcn.com/docs/installation/next).

Use:

- **Next.js App Router + TypeScript** — pages, metadata, image optimisation and production build.
- **Tailwind CSS v4** — layout, responsive rules and design tokens.
- **shadcn/ui** — accessible base primitives that remain editable in this repository, not a generic visual replacement for Kamap’s brand.
- **Lucide React** — locks, chevrons, close icon and Instagram icon; retain the Kamap SVG/PNG identity assets.
- **next-intl** (or an equally mature route-based i18n library) — locale URLs and typed translation messages.
- **Zod** only when the forthcoming email form becomes real, to validate a server action/API input.

Avoid adding a CMS, database, authentication, state library, animation library, or map SDK in this first landing-page conversion. They do not solve a present requirement. Add them later when the interactive map has a defined data model and user flows.

## 3. Foundation status

The Next app is now created directly in this repository root. It includes TypeScript, ESLint, Tailwind CSS v4, the App Router, the `@/*` alias, and shadcn/ui with `Button`, `Card`, `DropdownMenu`, `Dialog`, and `Input` primitives. The original site is safely retained in `old-static-site/` for visual/content migration.

Run it locally with:

```bash
npm run dev
```

Use `npm run lint` while migrating. In this environment, Turbopack cannot bind the worker port required for production CSS processing; use `npm run build -- --webpack` for an equivalent production verification until that environment limitation is resolved. Add `lucide-react` and `next-intl` in the relevant migration phases, rather than before their components exist.

> The exact CLI prompts and package versions evolve. Use the linked official installation pages at execution time rather than pinning stale versions from this document.

## 4. Proposed project structure

```text
kamap-next/
├── public/
│   ├── assets/
│   │   ├── brand/              # all “Logo Kamap” files, organised/named safely
│   │   ├── hero/               # slide backgrounds, Instagram content, decorations
│   │   ├── cards/
│   │   ├── about/
│   │   ├── flags/
│   │   └── fonts/
│   └── favicon.png
├── src/
│   ├── app/
│   │   ├── [locale]/page.tsx
│   │   ├── [locale]/layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/{site-header,site-footer}.tsx
│   │   ├── sections/{hero,partners,foundations,coming-soon,about-contact}.tsx
│   │   ├── hero/{hero-carousel,instagram-carousel,animated-headline}.tsx
│   │   ├── foundations/foundation-card.tsx
│   │   └── ui/                 # generated shadcn primitives
│   ├── content/
│   │   ├── hero.ts
│   │   ├── foundations.ts
│   │   └── partners.ts
│   ├── i18n/{routing,request}.ts
│   ├── messages/{fr,nl,en,es,de}.json
│   └── lib/utils.ts
├── components.json
└── next.config.ts
```

The `page.tsx` should primarily compose sections. Keep content data out of JSX and use small, named section components. This preserves the present page while making future product pages possible.

## 5. Asset and font migration

1. Copy every current image/logo/font to `public/assets` **without altering its binary content**.
2. Rename folders with spaces, accented characters, and inconsistent casing as they are copied. For example, use `public/assets/about/image-bike.jpg` instead of `image à propos/image bike.jpg`.
3. Maintain a short asset mapping while copying, so each old path has one verified new path.
4. Use `next/image` for photos/WebP/PNG assets. Supply accurate `alt`, `sizes`, and `priority` only for the initial hero imagery/logo.
5. Use ordinary `<img>` or Next Image for local SVG brand marks; do not redraw or swap them for icon-library approximations.
6. Load `Glitz.ttf`, `SpaceGrotesk-Regular.woff`, `SpaceGrotesk-SemiBold.woff`, and `GTProeliumSharp.otf` with `next/font/local` in `src/app/[locale]/layout.tsx`. Preserve their licensing information before deploying. Manrope can remain a Google font through `next/font/google`, or be self-hosted if the production privacy policy requires it.

For a byte-for-byte visual match, start with the existing images rather than re-exporting them. Optimise/compress only after the migration screenshots match.

## 6. Convert CSS into tokens and components

Start with the existing visual tokens. Add semantic CSS variables in `globals.css`, then expose them to Tailwind’s theme. This avoids scattering brand hex values through components.

```css
@import "tailwindcss";

@theme inline {
  --color-kamap-navy: #1c2b51;
  --color-kamap-teal: #44a99b;
  --color-kamap-paper: #f5f4f0;
  --color-kamap-ink: #1a1a1a;
  --color-kamap-blue: #497ee3;
  --font-display: var(--font-glitz);
  --font-body: var(--font-space-grotesk);
  --font-decorative: var(--font-gt-proelium);
}
```

Translate the existing CSS in this order:

| Current CSS area | Next/Tailwind destination | Notes |
| --- | --- | --- |
| Header | `site-header.tsx` | Sticky positioning; client hook only for hide/show-on-scroll. |
| Hero | `hero.tsx` + `hero-carousel.tsx` | Preserve composite gradient/background treatment. |
| Partner row | `partners.tsx` | Server component; data-driven links/logos. |
| Foundation cards | `foundation-card.tsx` | Keep custom Kamap card styling; use shadcn `Card` only as an accessible structural base if helpful. |
| Banner form | `coming-soon.tsx` | shadcn `Input`/`Button`, but retain current locked overlay. |
| Language menu | `locale-switcher.tsx` | shadcn `DropdownMenu`, locale links rather than DOM text replacement. |
| Modals | `dialog` primitive | Build only if they are still wanted; current map modal is placeholder and Instagram modal fetches a third-party QR image. |

Use Tailwind utilities for normal layout and responsive styles. Keep a small CSS module or `globals.css` only for hard-to-express details such as the layered hero backgrounds, branded pseudo-elements, and image decorative positioning. Do not copy the 1,417-line stylesheet as one new global file.

## 7. Replace imperative JavaScript with React responsibilities

| Current `main.js` concern | React/Next implementation |
| --- | --- |
| `innerHTML` language replacement | Locale message files plus `t()` calls; render links as JSX, never translated HTML strings. |
| Language buttons swap their own flags | Stable locale links in a dropdown. Current locale stays selected; options never mutate. |
| `setInterval` hero wording | `AnimatedHeadline` client component with `useEffect`, cleanup, and `prefers-reduced-motion` support. |
| Hero background timer/dots | `HeroCarousel` client component with state, interval cleanup, pause on hover/focus, keyboard-accessible buttons. |
| Instagram arrows | `InstagramCarousel` client component; image data belongs in a typed slide array. |
| Header scroll listener | `useHideOnScroll` hook with cleanup; respect reduced motion. |
| Inline `onclick` scroll/navigation | semantic `<Link href="#foundations">` and `<a>` elements. |
| Modal globals | controlled `Dialog` state inside the section that owns it. |

Only components using browser APIs, timers, event handlers, or React state need `'use client'`. The page, static sections, content data, partner row, foundation copy, and footer should remain server-rendered by default.

## 8. Internationalisation plan

The current translation object already contains FR/EN/NL/ES/DE content, but it injects HTML strings and mutates the option list. Replace it with one JSON file per locale, for example:

```json
{
  "nav": { "home": "Accueil", "about": "À propos", "contact": "Contact" },
  "hero": {
    "actionFind": "Trouve",
    "actionShare": "Partage",
    "animatedWords": ["facilement", "ton terrain"],
    "ctaProject": "Découvrir le projet"
  }
}
```

Use locale paths such as `/fr`, `/nl`, `/en`, `/es`, and `/de`. Make `/` redirect to `/fr` initially, or use browser language detection only if that is a conscious SEO/product choice. The metadata `lang`, page title, description, Open Graph image, and canonical/alternate language links should follow the active locale.

For copy needing an inline link (for example the Kameleon Instagram link), keep the sentence structure in the message and insert a React link through the i18n library’s rich-text feature. This is safer than the current `innerHTML` approach.

## 9. Migration sequence

### Phase A — establish the baseline

- Record desktop and mobile screenshots of the original at the intended breakpoints.
- List every link, slide, translation and asset path.
- Decide that the root static version is canonical; keep `kamap.be/` unchanged during conversion.

### Phase B — scaffold and visual shell

- Create the sibling Next project.
- Copy and validate assets, then register local fonts.
- Implement tokens, root layout, metadata, header, footer and the page background.
- Build the five static sections in French, matching layout before adding animations.

### Phase C — componentise repeated content

- Move partner records, foundation cards, hero slides and Instagram image sets into typed content files.
- Implement `FoundationCard` as one variant-based component rather than maintaining three markup copies.
- Preserve all labels, original links, quotes, locked states and image choices.

### Phase D — interactions and accessibility

- Add the hero/Instagram carousel, animated headline, sticky header hide/show, and anchor navigation.
- Use actual `<button>` controls with accessible names, visible focus states, and `aria-current` for the active slide/locale.
- Pause autoplay when the carousel receives focus or is hovered; support `prefers-reduced-motion` by disabling nonessential automatic animation.
- Replace empty image `alt` only for genuinely decorative images; give content images meaningful alt text.

### Phase E — locale routes

- Move each translation into its locale file.
- Test every locale for headline overflow, paragraph wrapping and working links.
- Add alternate-language metadata and sitemap rules.

### Phase F — QA and cutover

- Run `npm run lint` and `npm run build`.
- Compare screenshots against the baseline at 375px, 768px, 1024px, 1440px and a wide desktop.
- Manually test keyboard navigation, mobile navigation, reduced-motion mode, carousel controls, all external links and all five locales.
- Deploy the Next project, verify production assets/metadata, then retire the old duplicate only after sign-off.

## 10. What shadcn/ui should and should not do here

Use it for behaviour and accessibility: `Button`, `DropdownMenu`, `Dialog`, `Input`, perhaps `Card`. Customise its tokens/classes to Kamap rather than accepting its default neutral product UI.

Do not force the hero, logo, art-directed foundation cards, image collage, or decorative brand marks into generic shadcn patterns. Those are the site’s visual identity and should remain bespoke React components with Tailwind styling.

## 11. Future-ready decisions

- Keep marketing content in typed files now. Move it to a CMS only when non-developers need to publish it regularly.
- The locked map/workflow/calendar items should remain presentation only until requirements exist. When the map launches, give it its own route (for example `/[locale]/map`) and define its API/data model separately.
- When newsletter signup is enabled, use a server action or route handler, Zod validation, rate limiting, consent copy, and a configured provider. Do not expose provider keys in client code.
- Add analytics/cookie consent only after deciding the provider and legal requirements; it is not part of a pure visual refactor.

## 12. Definition of done

The refactor is done when the new App Router site retains every approved asset, font, section, language, link and interaction; no inline event handlers or DOM querying remain; static content is server-rendered; interactive areas are accessible; and the production build, linting, and cross-breakpoint visual comparisons pass.
