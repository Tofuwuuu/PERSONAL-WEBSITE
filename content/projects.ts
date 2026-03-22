import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "vanilla-js-todo-list-app",
    title: "To-Do List App",
    summary:
      "Single-page tasks: add, edit, complete, filter, and persist with localStorage.",
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
  },
  {
    slug: "vanilla-js-calculator",
    title: "Calculator",
    summary:
      "Keypad and keyboard input, expression display, and error handling responsive layout, deployed on Render.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "render.yaml",
    ],
    highlights: [
      "Arithmetic (add, subtract, multiply, divide) with clear, backspace, and decimal input.",
      "Keyboard shortcuts for digits, operators, equals, clear, and backspace—mirrors the on-screen controls.",
      "Division by zero surfaces an error state and resets cleanly on the next input.",
      "Static-site friendly: no build step; Render blueprint (`render.yaml`) documents repeatable deployment.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live demo",
        href: "https://calculator-ht64.onrender.com/",
      },
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Calculator",
      },
    ],
  },
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

