# Mark Roderick I. Salise

Software engineer portfolio: home-page sections for about, experience, projects, and contact, a projects archive with case studies, and a resume download.

**Live:** [https://markroderick.vercel.app](https://markroderick.vercel.app)

## Features

Home (`app/page.tsx`) is a single page. The sidebar (`content/navigation.ts`) links to these anchors.

| Section | Route | What it uses |
| --- | --- | --- |
| About | [`/#about`](https://markroderick.vercel.app/#about) | `components/About.tsx`, intro copy in `content/profile.ts` |
| Experience | [`/#experience`](https://markroderick.vercel.app/#experience) | `components/Experience.tsx`, roles in `content/experience.ts`; links to `/resume` |
| Projects | [`/#projects`](https://markroderick.vercel.app/#projects) | `components/ProjectsSection.tsx` lists projects with `featured: true` in `content/projects.ts` and links each to `/projects/[slug]` |
| Contact | [`/#contact`](https://markroderick.vercel.app/#contact) | `components/Contact.tsx` mailto using `profile.email` |

Also on the home page: a mobile hero (`components/Hero.tsx`) with name, role, and tagline. On large screens that intro is in the sidebar, with GitHub and LinkedIn from `profile.links`.

| Route | Purpose |
| --- | --- |
| `/projects` | Full project archive (`app/projects/page.tsx`) |
| `/projects/[slug]` | Case study (`app/projects/[slug]/page.tsx`, `getProjectBySlug`) |
| `/resume` | Resume page with a download button (`app/resume/page.tsx`) |
| `/resume.pdf` | Download handler (`app/resume.pdf/route.ts`). Reads `src/Mark_Salise_Resume.docx` and returns that Word file (`Content-Disposition: attachment; filename="Mark_Salise_Resume.docx"`) |
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

## Editing content

Site copy is typed constants in `content/`. Shared shapes are in `content/types.ts`.

| File | Edit this |
| --- | --- |
| `content/profile.ts` | `name`, `role`, `tagline`, `location`, `email`, `intro` paragraphs, `links` |
| `content/experience.ts` | Each job: `id`, `company`, `role`, `start`, `end`, `bullets`, `tech` |
| `content/projects.ts` | Project list and `getProjectBySlug`. Fields: `slug`, `title`, `category`, `year`, `summary`, `stack`, `highlights`, `links` (`kind`: `repo`, `demo`, or `case-study`), plus optional `featured`, `madeAt`, `placeholder` |
| `content/navigation.ts` | Sidebar labels and section ids (`about`, `experience`, `projects`, `contact`) |
| `content/projectImages.ts` | Card image per slug. Files live under `src/` and must be imported here |
| `content/skills.ts` | Skill groups. `components/Skills.tsx` is not rendered by `app/page.tsx`, so this file does not show on the site until that section is mounted |

Case-study images are imported inside the matching component (`components/HyperledgerCaseStudy.tsx`, `ProcurementCaseStudy.tsx`, `CollaborativeCaseStudy.tsx`, and the image imports in `app/projects/[slug]/page.tsx`) from folders under `src/`.

### Resume file

Replace `src/Mark_Salise_Resume.docx`. Both `app/resume/page.tsx` and `app/resume.pdf/route.ts` refer to that path. If you rename the file, update those two references together.

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
