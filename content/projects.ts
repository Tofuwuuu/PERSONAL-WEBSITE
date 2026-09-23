import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "ai-ops-assistant",
    title: "AI Ops Assistant — Archivist",
    category: "AI & Automation",
    year: "2026",
    madeAt: "Personal Project",
    featured: true,
    summary:
      "Operational intelligence agent that turns raw requests into safe, reviewable drafts: classifies intent, retrieves relevant context, drafts a response with an LLM, and logs every step before a human approves it.",
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "n8n",
      "OpenAI API",
      "Docker",
    ],
    highlights: [
      "Agent pipeline: classify → retrieve context → generate draft → validate → log, with human approval before any reply is sent.",
      "n8n orchestrates webhooks, retries, and notifications around the FastAPI agent service.",
      "Dashboard shows ticket status, AI draft, and confidence so a human stays in the loop.",
      "Open-sourced with a documented setup and `.env.example` so anyone can run the demo.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://ai-ops-assistant-wheat.vercel.app/",
      },
    ],
  },
  {
    slug: "hyperledger-blockchain-verification",
    title: "Hyperledger Blockchain System — Alumni Document Verification",
    category: "Blockchain",
    year: "2025",
    madeAt: "Capstone — CvSU Carmona",
    featured: true,
    summary:
      "Capstone thesis for Cavite State University — Carmona: permissioned Hyperledger Fabric network for tamper-proof alumni document verification and credential checks, with a React frontend and FastAPI backend.",
    stack: [
      "Hyperledger Fabric",
      "Go/Chaincode",
      "FastAPI",
      "React",
      "Vite",
      "MongoDB",
      "Docker",
    ],
    highlights: [
      "Delivered end-to-end for CVSU Carmona stakeholders, from requirements through deployment and handoff.",
      "Implemented Fabric chaincode and network tooling for immutable alumni credential records.",
      "Built REST APIs for issuance and verification, connecting the ledger to application services.",
      "Vercel hosts the public UI. The hosted API is unavailable, so Fabric and the backend run from the local Docker setup documented in the repo.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://hyperledger-document-verification.vercel.app/",
      },
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Hyperledger-Document-Verification-",
      },
    ],
  },
  {
    slug: "procurement-blockchain-system",
    title: "Procurement Blockchain System — Freelance Client Project",
    category: "Blockchain",
    year: "2025",
    madeAt: "Freelance Client",
    summary:
      "Full-stack Philippine government procurement platform with purchase requests, canvassing, POs, inspections, and inventory/property workflows. Hyperledger Fabric records inspection events for tamper-evident audit trails.",
    stack: [
      "Hyperledger Fabric",
      "Go/Chaincode",
      "React",
      "TypeScript",
      "FastAPI",
      "MongoDB",
      "Docker",
    ],
    highlights: [
      "Modeled multi-stage procurement from PR through disbursement with role-based access (admin, canvasser, validator, finance, auditor, custodian).",
      "Integrated Fabric chaincode for inspection reports and an in-app blockchain explorer for on-chain verification.",
      "Captured workflow audit logs in MongoDB with dashboard analytics across procurement stages.",
      "Live demo deployed on Vercel; Docker Compose stack for Fabric peers, API, and React SPA.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://pams-pied.vercel.app/login",
      },
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Procurement-Blockchain.git",
      },
    ],
  },
  {
    slug: "on-chain-wallet-risk-analyzer",
    title: "On-Chain Wallet Risk Analyzer",
    category: "Blockchain",
    year: "2025",
    madeAt: "Personal Project",
    summary:
      "Ethereum wallet risk analyzer producing a 0–100 score, shareable reports, side-by-side comparison, blacklist checks, and printable exports. Educational demo with deterministic heuristics when API keys are absent.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "React",
      "TypeScript",
      "Recharts",
      "Etherscan",
    ],
    highlights: [
      "Weighted scoring factors for mixer exposure, scam tokens, mixing patterns, and wallet behavior.",
      "Saved reports, history, compare endpoint, and PDF/HTML export for shareable output.",
      "Provider clients scaffolded for Etherscan, Alchemy, Moralis, and Covalent.",
      "Educational demo that runs locally with Docker; interactive docs at `/docs` when the service is running.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/On-Chain-Wallet-Risk-Analyzer.git",
      },
    ],
  },
  {
    slug: "todo-list-dapp",
    title: "To-Do List DApp",
    category: "Blockchain",
    year: "2025",
    madeAt: "Personal Project",
    summary:
      "Calendar-style to-do app with on-chain task storage on Sepolia: connect a wallet, add and manage tasks, and persist them via a TodoList Solidity contract with a React frontend.",
    stack: [
      "Solidity",
      "Hardhat",
      "Sepolia",
      "React",
      "Vite",
      "Web3.js",
      "MetaMask",
    ],
    highlights: [
      "Calendar UI for adding, completing, and deleting tasks tied to the connected wallet.",
      "Tasks persisted on-chain per address through a deployed Sepolia contract.",
      "Hardhat toolchain with compile, test, and deploy scripts documented in the repo.",
      "Live demo on Vercel with MetaMask wallet connection.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://calendar-todo-template.vercel.app/",
      },
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/To-Do-List-DApp.git",
      },
    ],
  },
  {
    slug: "defi-portfolio-tracker",
    title: "DeFi Portfolio Tracker",
    category: "Blockchain",
    year: "2025",
    madeAt: "Personal Project",
    summary:
      "DeFi portfolio dashboard for viewing wallet positions and protocol exposure in one place, built with React and Web3 tooling and deployed on Vercel.",
    stack: ["React", "TypeScript", "Web3", "Vite", "Vercel"],
    highlights: [
      "Portfolio overview UI for tracking DeFi wallet positions and holdings.",
      "Wallet-connect flow for loading on-chain balance and position data.",
      "Responsive dashboard layout optimized for demo and portfolio review.",
      "Live deployment on Vercel with GitHub source available.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://defi-portfolio-tracker.vercel.app/",
      },
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/DeFi-Portfolio-Tracker.git",
      },
    ],
  },
  {
    slug: "collaborative-realtime-document-editor",
    title: "Collaborative Real-Time Document Editor",
    category: "Full-stack",
    year: "2025",
    madeAt: "Personal Project",
    summary:
      "Multi-user document editor with live WebSocket sync, Redis-backed persistence, conflict handling, and a React + TypeScript UI on a FastAPI backend.",
    stack: [
      "React",
      "TypeScript",
      "WebSockets",
      "FastAPI",
      "Redis",
      "Render",
      "Vercel",
    ],
    highlights: [
      "Simultaneous editing with real-time updates and operational-transform-style conflict handling.",
      "Production frontend on Vercel; backend and Redis hosted on Render.",
      "Environment-driven API and WebSocket base URLs for local and deployed setups.",
      "Docker and blueprint docs for reproducing the full stack.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://collaborative-real-time-document-ed.vercel.app/docs/doc-85e8ea89",
      },
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Collaborative-Real-Time-Document-Editor.git",
      },
    ],
  },
  {
    slug: "fashion-ecommerce-platform",
    title: "Fashion E-Commerce Platform (Atelier Commerce)",
    category: "Full-stack",
    year: "2025",
    madeAt: "Personal Project",
    summary:
      "Full-stack fashion storefront: product browsing, variant carts, PayMongo sandbox checkout, order history, JWT auth, and an admin dashboard with Cloudinary media uploads.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "FastAPI",
      "PostgreSQL",
      "PayMongo",
      "Cloudinary",
    ],
    highlights: [
      "Customer flows from catalog through checkout; admin CRUD for products and orders.",
      "PayMongo sandbox with mock fallback when keys are unset so demos stay usable.",
      "SQLAlchemy + Alembic, JWT auth, and Dockerized Postgres for local development.",
      "Live storefront on Vercel with Railway-oriented backend deployment notes.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://fecommercefashion.vercel.app/",
      },
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/E-commerce.git",
      },
    ],
  },
  {
    slug: "smartdoc-analyzer",
    title: "SmartDoc Analyzer",
    category: "Full-stack",
    year: "2025",
    madeAt: "Personal Project",
    summary:
      "AI document analysis pipeline: upload PDFs or images, extract text (PyMuPDF / Tesseract), run spaCy NER and insights, cache by file hash in Redis, and store results in PostgreSQL. Optional contract compliance risk flags.",
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "spaCy",
      "PyMuPDF",
      "Docker Compose",
    ],
    highlights: [
      "SHA-256 deduplication skips reprocessing when the same file is uploaded again.",
      "Rule-based contract risk scan for missing clauses, auto-renewal, payment terms, and jurisdiction conflicts.",
      "Optional JWT auth scopes uploads to registered users.",
      "Vercel hosts the frontend. Document analysis runs from the local Docker Compose stack (API, Postgres, Redis); the Railway API the site calls is unavailable.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://smart-doc-analyzer-murex.vercel.app/",
      },
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/SmartDoc-Analyzer.git",
      },
    ],
  },
  {
    slug: "calculator",
    title: "Calculator",
    category: "Web Development",
    year: "2024",
    madeAt: "Personal Project",
    summary:
      "Classic calculator built with plain HTML, CSS, and JavaScript — no build step. Supports keyboard input, division-by-zero handling, and static hosting on Render.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Arithmetic, clear, backspace, and decimal operations.",
      "Keyboard shortcuts for digits, operators, Enter, Escape, and Backspace.",
      "Render static site blueprint via included `render.yaml`.",
      "Open `index.html` directly or serve the folder with any static server.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Calculator.git",
      },
    ],
  },
  {
    slug: "todo-list-vanilla-js",
    title: "To-Do List App (Vanilla JS)",
    category: "Web Development",
    year: "2024",
    madeAt: "Personal Project",
    summary:
      "Browser to-do list: add tasks, mark complete, and remove items using vanilla JavaScript with no framework or build pipeline.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Client-side task list with DOM manipulation only.",
      "Configured for Render static hosting (publish directory = repo root).",
      "Optional `render.yaml` Blueprint for one-click static deploy setup.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/To-Do-List-App-Vanilla-JS-.git",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
