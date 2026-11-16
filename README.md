# Mark Roderick I. Salise

Software engineer portfolio: home-page sections for about, experience, projects, and contact, a projects archive with case studies, and a resume download.

**Live:** [https://markroderick.vercel.app](https://markroderick.vercel.app)

## Features

Home (`app/page.tsx`) is a single page in two columns on desktop: a sticky intro (`components/Intro.tsx`) with name, role, pitch, resume and contact buttons, section nav (`content/navigation.ts`), social links, and the light/dark toggle, next to the scrolling sections below. On phones it is one column with the intro on top.

| Section | Route | What it uses |
| --- | --- | --- |
| About | [`/#about`](https://markroderick.vercel.app/#about) | `components/About.tsx`, `about` paragraphs in `content/profile.ts` |
| Experience | [`/#experience`](https://markroderick.vercel.app/#experience) | `components/Experience.tsx`, roles in `content/experience.ts` |
| Projects | [`/#projects`](https://markroderick.vercel.app/#projects) | `components/ProjectsSection.tsx`: featured cards from `content/featured.ts` (the first two as large showcases), then every other project in a "More projects" list. Each links to `/projects/[slug]` |
| Contact | [`/#contact`](https://markroderick.vercel.app/#contact) | `components/Contact.tsx`: `profile.email` as a mailto link that copies the address when the clipboard is available, plus the resume button |

| Route | Purpose |
| --- | --- |
| `/projects` | Full project archive (`app/projects/page.tsx`) |
| `/projects/[slug]` | Case study (`app/projects/[slug]/page.tsx`, `getProjectBySlug`) |
| `/resume.pdf` | The resume PDF, served from `public/resume.pdf` |
| `/resume` | Redirects to `/resume.pdf` (`next.config.ts`) |
| `/sitemap.xml`, `/robots.txt` | Generated from `NEXT_PUBLIC_SITE_URL` (`app/sitemap.ts`, `app/robots.ts`) |

## Stack

Ranges match `package.json`. `npm run dev` is `next dev` with no `-p` flag and no port in `next.config.ts`, so the dev server uses Next.js’s default port **3000**.

| Package | Range | Role |
| --- | --- | --- |
| `next` | `^16.2.0` | App Router (`app/`), metadata, sitemap, route handlers |
| `react`, `react-dom` | `^19.1.1` | UI |
| `typescript` | `^5.8.0` | Types (`strict` in `tsconfig.json`) |
| `tailwindcss` | `^3.4.17` | Utility CSS (`tailwind.config.ts`) |
| `postcss` | `^8.4.38` | CSS pipeline |
| `autoprefixer` | `^10.4.20` | Vendor prefixes |
| `eslint` | `^9.0.0` | Lint (`eslint.config.mjs`) |
| `eslint-config-next` | `^16.2.0` | Next.js ESLint rules |

Type packages: `@types/node` `^24.0.0`, `@types/react` `^19.0.0`, `@types/react-dom` `^19.0.0`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Command |
| --- | --- |
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Serve the production build | `npm run start` |
| Lint | `npm run lint` |
| Tests | `npm test` (Vitest + Testing Library) |

## Editing content

Site copy is typed constants in `content/`. Shared shapes are in `content/types.ts`.

| File | Edit this |
| --- | --- |
| `content/profile.ts` | `name`, `role`, `tagline` (meta description and JSON-LD), `pitch` (intro line), `email`, `resume`, `about` paragraphs, `links` |
| `content/experience.ts` | Each job: `id`, `company`, `role`, `start`, `end`, `bullets`, `tech` |
| `content/projects.ts` | Project list and `getProjectBySlug`. Fields: `slug`, `title`, `category`, `year`, `summary`, `stack`, `highlights`, `links` (`kind`: `repo`, `demo`, or `case-study`), plus optional `madeAt`, `placeholder`, `badge` |
| `content/navigation.ts` | Section nav labels and ids (`about`, `experience`, `projects`, `contact`) |
| `content/featured.ts` | Which projects are featured on the home page, in order, with the one-line problem/result shown on each card and the `showcase` flag |
| `content/projectImages.ts` | Card image per slug. Files live under `src/` and must be imported here |

Case-study images are imported inside the matching component (`components/HyperledgerCaseStudy.tsx`, `ProcurementCaseStudy.tsx`, `CollaborativeCaseStudy.tsx`, and the image imports in `app/projects/[slug]/page.tsx`) from folders under `src/`.

### Resume file

Replace `public/resume.pdf`. The download name comes from `profile.resume.fileName`.

## Environment variables

`.env*` files are gitignored. For local metadata, sitemap, and robots, create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://markroderick.vercel.app
```

`app/layout.tsx` uses it as `metadataBase`. `app/sitemap.ts` and `app/robots.ts` use it as the site origin. When the variable is unset, those three fall back to `https://example.com`.

## Build and deploy

```bash
npm run build
npm run start
```

Import the repository on [Vercel](https://vercel.com) and set:

```bash
NEXT_PUBLIC_SITE_URL=https://markroderick.vercel.app
```

Production: [https://markroderick.vercel.app](https://markroderick.vercel.app).

## Screenshots

This README does not embed screenshots. Put any future doc images in `docs/screenshots/`. Images the site itself renders stay in `src/`.

## License

[MIT](LICENSE)
