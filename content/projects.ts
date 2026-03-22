import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "vanilla-js-todo-list-app",
    title: "Vanilla JavaScript To-Do List App",
    summary:
      "Single-page task manager that supports add, edit, complete, filter (all/active/completed), clear completed, and localStorage persistence.",
    stack: ["HTML", "CSS", "JavaScript", "localStorage"],
    highlights: [
      "Demonstrates practical UI behavior: form handling, event delegation, accessible controls, optimistic rendering, and persistent client-side storage with validation.",
      "Add, edit, complete, and delete tasks; filter by all, active, or completed; clear completed in one action.",
      "Remaining and total counts, empty state messaging, and accessible semantics (ARIA states, labels).",
    ],
    links: [
      {
        kind: "demo",
        label: "Live demo",
        href: "https://to-do-list-app-vanilla-js.onrender.com/",
      },
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/To-Do-List-App-Vanilla-JS-",
      },
    ],
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
  if (slug === "project-one") {
    return projects.find((p) => p.slug === "vanilla-js-todo-list-app");
  }
  return projects.find((p) => p.slug === slug);
}

