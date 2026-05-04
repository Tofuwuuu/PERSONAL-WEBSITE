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
    title: "Hyperledger Blockchain System - Alumni Document Verification",
    summary:
      "Permissioned Hyperledger Fabric system for tamper-proof alumni document verification and credential checks.",
    stack: ["Hyperledger Fabric", "Go/Chaincode", "FastAPI", "Node.js", "Docker", "MongoDB"],
    highlights: [
      "Designed and implemented a permissioned Hyperledger Fabric network and chaincode to store tamper-proof alumni records.",
      "Built RESTful APIs for credential issuance and verification, integrating smart contracts with backend services.",
      "Implemented admin tooling and deployment scripts to provision the network and nodes.",
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
    slug: "procurement-blockchain-system",
    title: "Procurement Blockchain System - Freelance Client Project",
    summary:
      "Full procurement workflow on Hyperledger Fabric covering purchase orders, approvals, and audit trails.",
    stack: ["Hyperledger Fabric", "Go/Chaincode", "FastAPI", "Docker", "PostgreSQL"],
    highlights: [
      "Built for a graduate-level client with end-to-end workflow support from procurement request to approval.",
      "Implemented role-based access control and chaincode business logic for every procurement stage.",
      "Focused on tamper-proof records, auditability, and data integrity across transactions.",
    ],
    links: [],
  },
  {
    slug: "collaborative-realtime-document-editor",
    title: "Collaborative Real-Time Document Editor",
    summary:
      "Multi-user document editing platform with live synchronization and conflict handling.",
    stack: ["React", "TypeScript", "WebSockets", "FastAPI", "PostgreSQL", "Docker"],
    highlights: [
      "Built simultaneous multi-user editing with real-time updates.",
      "Implemented WebSocket communication and conflict-resolution logic for concurrent edits.",
      "Designed a clean React and TypeScript interface with intuitive document management.",
    ],
    links: [],
  },
  {
    slug: "ai-powered-personal-dashboard",
    title: "AI-Powered Personal Dashboard",
    summary:
      "Full-stack AI dashboard that aggregates user data and surfaces intelligent insights.",
    stack: ["React", "TypeScript", "FastAPI", "PyTorch", "Transformers", "PostgreSQL", "Docker"],
    highlights: [
      "Integrated transformer-based models for natural language summarization and classification features.",
      "Built modular, dynamic widgets with a responsive dashboard layout.",
      "Designed the app architecture for scalable full-stack data and inference flows.",
    ],
    links: [],
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

