# KAMAP

Modern Next.js rebuild of the KAMAP landing page.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- shadcn/ui
- ESLint

## Commands

```bash
npm run dev
npm run lint
npm run build -- --webpack
```

Use the Webpack build command for now: the current environment prevents Turbopack's CSS worker from binding its internal port. This is an environment limitation, not an application compilation error.

## Legacy source

The existing static site is retained in `old-static-site/` while it is migrated. Do not delete that folder until the new implementation has passed visual and interaction QA.

The project-specific conversion plan is in [NEXTJS_REFACTOR_GUIDE.md](NEXTJS_REFACTOR_GUIDE.md).
