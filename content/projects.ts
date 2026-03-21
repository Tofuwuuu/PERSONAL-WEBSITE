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
    slug: "hyperledger-blockchain-verification",
    title: "Hyperledger Blockchain Verification",
    summary:
      "A blockchain-based verification system that secures and validates academic documents.",
    stack: ["JavaScript", "Hyperledger", "Blockchain"],
    highlights: [
      "Built for tamper-resistant and transparent document verification.",
      "Streamlined verification workflow for administrators and end users.",
      "Focused on data integrity, trust, and auditability."
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Hyperledger-Document-Verification-"
      }
    ]
  }
];

export function getProjectBySlug(slug: string) {
  if (slug === "project-two") {
    return projects.find(
      (p) => p.slug === "hyperledger-blockchain-verification"
    );
  }
  return projects.find((p) => p.slug === slug);
}

