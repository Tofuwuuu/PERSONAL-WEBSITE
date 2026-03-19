import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    summary: "A short one-line summary that explains the outcome and impact.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    highlights: [
      "What problem it solved and why it matters.",
      "A measurable result or key feature (performance, UX, automation).",
      "A technical detail you’re proud of (architecture, testing, DX)."
    ],
    links: [
      { kind: "repo", label: "Repo", href: "https://github.com/your-handle/project-one" },
      { kind: "demo", label: "Live demo", href: "https://example.com" }
    ]
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary: "Another concise summary with a clear value proposition.",
    stack: ["React", "Node.js", "PostgreSQL"],
    highlights: [
      "Highlight a user-centered feature or workflow.",
      "Mention reliability, observability, or performance work.",
      "Mention integrations, security, or data modeling."
    ],
    links: [{ kind: "repo", label: "Repo", href: "https://github.com/your-handle/project-two" }]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

