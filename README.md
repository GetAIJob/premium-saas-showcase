# Lumen — Premium SaaS Landing Page

A flagship portfolio piece built by [GrowthSite Lab](https://risesitelab.com).
Dark luxury aesthetic, glassmorphism surfaces, smooth motion, fast performance.

**Live:** https://lumen.risesitelab.com

## Stack

- **Astro 5** — server-first, minimal JS
- **Tailwind CSS v4** — CSS-first `@theme` config
- **framer-motion** — for the few interactive islands (mesh background, pricing toggle, mobile menu, custom cursor)
- **TypeScript** — strict mode
- **React 18** — only as the island runtime for framer-motion components

## Pages

- `/` — landing (Hero, Trust, Features, How it works, Customers, Pricing, CTA, Footer)
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service

## Architecture

```
src/
├── components/
│   ├── nav/        Navbar.astro, MobileMenu.tsx
│   ├── hero/       Hero.astro, MeshBackground.tsx, DashboardPreview.astro
│   ├── trust/      LogoRow.astro
│   ├── features/   BentoGrid.astro, BentoCard.astro
│   ├── flow/       HowItWorks.astro
│   ├── proof/      Testimonials.astro
│   ├── pricing/    PricingSection.tsx (interactive toggle)
│   ├── cta/        FinalCTA.astro
│   ├── footer/     Footer.astro
│   └── ui/         Cursor.tsx (desktop only)
├── layouts/        Base.astro
├── lib/            content.ts (centralized copy)
├── pages/          index.astro, privacy.astro, terms.astro
└── styles/         global.css (Tailwind v4 + design tokens)
```

## Design tokens (Plasma palette)

- `--color-bg-base: #050816` deep navy
- `--color-accent-indigo: #6366F1`
- `--color-accent-blue: #3B82F6`
- `--color-accent-cyan: #22D3EE`
- Brand gradient: `linear-gradient(135deg, #6366F1, #3B82F6, #22D3EE)`

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # produces dist/
npm run preview
```

## Deployment

Static-output Astro → Cloudflare Pages. See repo `.github` actions or use Wrangler:

```bash
npm run build
npx wrangler pages deploy dist/ --project-name lumen-saas --branch main
```

## Performance

Targets: Lighthouse mobile ≥ 95 · LCP < 1.5s · TBT < 100ms · CLS < 0.05.
Total JS gzipped: ~88 KB (mostly React + framer-motion runtime, only loaded on islands).

## License

Proprietary © 2026 GrowthSite Lab.
