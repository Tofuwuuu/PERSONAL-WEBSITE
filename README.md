# Personal Website

Portfolio site built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

Create a `.env.local` file at the project root:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This is required for the sitemap, robots.txt, and Open Graph metadata to use the correct base URL.

## Project Structure

| Path | Purpose |
|------|---------|
| `app/` | Routes, layout, metadata, PDF route handler |
| `components/` | UI components |
| `content/` | Static site data (profile, projects, skills) |
| `src/` | Images and resume PDF |

## Content

All copy lives as typed TypeScript constants in `content/`:

- `content/profile.ts` — name, role, tagline, links
- `content/projects.ts` — project list and `getProjectBySlug`
- `content/skills.ts` — skill groups
- `content/types.ts` — shared types

## Resume

The resume PDF is served from `src/Mark_Resume.pdf` via the route handler at `/resume.pdf`. Replace that file to update the downloadable resume.

## Build & Deploy

```bash
npm run build   # production build
npm run start   # serve production build locally
npm run lint    # lint check
```

Deploy to [Vercel](https://vercel.com) by importing the repository. Set `NEXT_PUBLIC_SITE_URL` in the Vercel project environment variables.
