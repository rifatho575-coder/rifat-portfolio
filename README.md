# Rifat Hossain — Portfolio

Ultra-premium personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui conventions. Dark-only, glassmorphism, aurora gradient background, animated particles, spotlight hover cards, and a custom mouse-follower.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Editing content

- **Hero / About / Contact copy** — `components/hero.tsx`, `components/about.tsx`, `components/contact.tsx`
- **Skills** — `components/skills.tsx` (edit the `CATEGORIES` array — Frontend/Backend/Programming entries are placeholders, swap for your real stack)
- **Projects** — `components/projects.tsx` (the `PROJECTS` array is sample content — replace with your real work; swap the gradient cover block for a real screenshot with `next/image` once you have one)
- **Experience timeline** — `components/experience.tsx` (the `timeline` array is sample content — replace with your real milestones)
- **Resume button** — disabled by default in `components/hero.tsx`. Add your PDF to `/public` (e.g. `/public/resume.pdf`) then change the `Button` to an `<a href="/resume.pdf" download>` and remove the `disabled` prop
- **Avatar** — `public/images/avatar.png`, referenced in `components/hero.tsx`
- **Colors** — `tailwind.config.ts` (`blue`, `violet`, `cyan`, `base`)
- **Fonts** — Geist Sans/Mono are loaded via the `geist` package in `app/layout.tsx`

## Placeholder content to replace later

This project ships with realistic placeholders so the design never looks empty:
- 3 sample projects with GitHub/Demo/Case study links (Demo and Case study point to `#`)
- A sample 2-entry experience timeline
- Placeholder Frontend/Backend/Programming skills
- A disabled Resume button

Search for the comment `// Sample content` or `// placeholder` in each component to find exactly what to swap.

## Deploy

The project is ready to deploy on Vercel: push to a GitHub repo, import it at vercel.com/new, and it builds with zero config.

## Notes

- Motion respects `prefers-reduced-motion`.
- The particle field and mouse-follower are disabled automatically on touch devices where they don't make sense.
- Metadata in `app/layout.tsx` uses a placeholder domain (`rifathossain.dev`) — update `SITE_URL` once you have a real domain, and update `app/sitemap.ts` to match.
