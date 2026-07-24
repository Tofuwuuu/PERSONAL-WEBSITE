import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "hyperledger-blockchain-verification",
    title: "Hyperledger Blockchain System — Alumni Document Verification",
    category: "Blockchain",
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
      "Deployed the public demo on Vercel; backend and Fabric integration documented for Render/local setups.",
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
      "Docker Compose stack for Fabric peers, API, and React SPA — local demo; no public production URL yet.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Procurement-Blockchain.git",
      },
    ],
  },
  {
    slug: "crypto-payments-gateway",
    title: "Crypto Payments Gateway",
    category: "Blockchain",
    placeholder: true,
    summary:
      "Merchant invoicing and Sepolia testnet ETH payment gateway with on-chain listeners, webhook delivery, and a React merchant dashboard backed by FastAPI and PostgreSQL.",
    stack: [
      "Solidity",
      "Sepolia",
      "FastAPI",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker Compose",
    ],
    highlights: [
      "Merchants create invoices; customers pay with real Sepolia testnet ETH.",
      "Background listener and webhook worker process chain events and notify merchants.",
      "Docker Compose orchestrates Postgres, API, listener, worker, and frontend for one-command local demos.",
      "Alembic migrations and OpenAPI docs at `/docs` for API exploration.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/-Crypto-Payments-Gateway.git",
      },
    ],
  },
  {
    slug: "smart-contract-escrow-marketplace",
    title: "Smart Contract Escrow Marketplace",
    category: "Blockchain",
    placeholder: true,
    summary:
      "Decentralized escrow marketplace: buyers lock ETH in Solidity, sellers confirm delivery, buyers release payment, and arbiters resolve disputes. FastAPI indexes events into PostgreSQL; React handles MetaMask flows.",
    stack: [
      "Solidity",
      "OpenZeppelin",
      "Hardhat",
      "FastAPI",
      "PostgreSQL",
      "web3.py",
      "React",
      "Sepolia",
    ],
    highlights: [
      "On-chain state machine with platform fees, pull payments, and arbiter resolution paths.",
      "OpenZeppelin ReentrancyGuard, Ownable, and Pausable for contract hardening.",
      "Event indexer with checkpointed backfill and idempotent log storage.",
      "Docker Compose local stack: Hardhat, deploy, DB, API, indexer, and UI.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/-Smart-Contract-Escrow-Marketplace.git",
      },
    ],
  },
  {
    slug: "on-chain-wallet-risk-analyzer",
    title: "On-Chain Wallet Risk Analyzer",
    category: "Blockchain",
    placeholder: true,
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
      "Runs locally via Docker Compose (frontend :5173, API :8000).",
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
    placeholder: true,
    summary:
      "On-chain task list on Sepolia: each wallet owns its tasks on a TodoList Solidity contract, with a React + Web3.js frontend and Hardhat toolchain.",
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
      "Add, complete, and delete tasks persisted on-chain per connected address.",
      "Compile step copies ABI to the frontend; tests run under Hardhat.",
      "Deploy scripts write `deployments/sepolia.json` and configure `VITE_CONTRACT_ADDRESS`.",
      "Sepolia testnet deployment workflow documented in the repo README.",
    ],
    links: [
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
    placeholder: true,
    summary:
      "Planned DeFi portfolio tracking project — GitHub repository is initialized for future wallet and protocol aggregation work (no application code committed yet).",
    stack: ["Planned: React", "TypeScript", "Web3", "FastAPI"],
    highlights: [
      "Repository reserved for portfolio-grade DeFi position tracking and analytics.",
      "Implementation pending — case study and visuals will be added when the build lands.",
    ],
    links: [
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
    placeholder: true,
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
      "Deploy paths documented for Vercel (frontend) and Railway (API, Postgres, Redis).",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/SmartDoc-Analyzer.git",
      },
    ],
  },
  {
    slug: "consultation-system-for-teachers",
    title: "Consultation System for Teachers",
    category: "Full-stack",
    placeholder: true,
    summary:
      "Laravel monolith where students book consultation slots with teachers, teachers manage availability and approve or reject requests, and admins oversee users and bookings with email and in-app notifications.",
    stack: [
      "Laravel 11",
      "PHP 8.2",
      "Blade",
      "Tailwind CSS",
      "MySQL",
      "Laravel Breeze",
      "Docker Sail",
    ],
    highlights: [
      "Role-based flows for students, teachers, and admins.",
      "Database notifications plus queued email for booking lifecycle events.",
      "Laravel Sail (Docker) for reproducible local setup on Windows via `sail.ps1`.",
      "Seeded demo accounts documented in the README for quick walkthroughs.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Consultation-System-for-Teachers.git",
      },
    ],
  },
  {
    slug: "crypto-exchange-order-book-simulator",
    title: "Crypto Exchange Order Book Simulator",
    category: "Full-stack",
    placeholder: true,
    summary:
      "Simulated crypto exchange matching engine with limit and market orders, price-time priority, PostgreSQL trade history, Redis-backed live depth, WebSocket market data, and a React dashboard.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "React",
      "Docker Compose",
    ],
    highlights: [
      "Pure domain matching engine isolated from API and persistence for testability.",
      "Partial fills, cancellation, resting limits, and FIFO matching at each price level.",
      "REST order entry plus WebSocket feed for book and trade updates.",
      "Health checks across API, Postgres, and Redis in Docker Compose.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Crypto-Exchange-Order-Book-Simulator.git",
      },
    ],
  },
  {
    slug: "cryptosense-crypto-analysis-platform",
    title: "CryptoSense — Crypto Analysis & Paper Trading",
    category: "Full-stack",
    placeholder: true,
    summary:
      "Cryptocurrency analysis platform (Phase 1): FastAPI backend with DDD-style layers, async SQLAlchemy, JWT auth, Celery workers, PostgreSQL, Redis, and MailHog for local email testing.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker Compose",
      "JWT",
      "Alembic",
    ],
    highlights: [
      "Register, login, refresh, and logout with JWT access and refresh tokens.",
      "Docker Compose stack for API, worker, Postgres, Redis, and MailHog.",
      "Integration and k6 benchmark scripts for load testing auth endpoints.",
      "Roadmap includes signals, paper trading, and Binance integration beyond Phase 1.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Crypto-analyzing-buy-and-sell-test.git",
      },
    ],
  },
  {
    slug: "ai-powered-personal-dashboard",
    title: "AI-Powered Personal Dashboard",
    category: "Full-stack",
    placeholder: true,
    summary:
      "Personal dashboard with JWT auth, text entry submission, async AI analysis via Gemini (structured JSON outputs), aggregated insights, trend endpoints, and a data-driven React UI with live polling.",
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Gemini",
    ],
    highlights: [
      "AI pipeline returns summary, classification, sentiment, topics, action items, and confidence scores.",
      "Celery-backed async processing for analysis jobs.",
      "Docker Compose for API, worker, database, cache, and frontend.",
      "Local demo at http://localhost:5173 with API docs at :8000/docs when running Compose.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/AI-Powered-Personal-Dashboard.git",
      },
    ],
  },
  {
    slug: "pams-procurement-asset-management",
    title: "PAMS — Procurement & Asset Management System",
    category: "Full-stack",
    placeholder: true,
    summary:
      "Web-based procurement and asset management for the full PR → canvass → PO lifecycle, property transactions (IAR, ICS, PAR, PTR), suppliers, and user roles — FastAPI backend with Jinja2 SSR UI and MongoDB.",
    stack: [
      "FastAPI",
      "MongoDB",
      "Motor",
      "Jinja2",
      "Uvicorn",
      "Python",
    ],
    highlights: [
      "Modules for purchase requests, abstract of canvass, purchase orders, suppliers, and property listings.",
      "Async MongoDB access via Motor; role-based validators and user activity logs.",
      "Transaction types cover inspection, issuance, property transfer/return, and waste material reports.",
      "Local deployment via batch scripts and Uvicorn (default port 8877) — no public demo URL.",
    ],
    links: [],
  },
  {
    slug: "portal-school-portal",
    title: "School Portal",
    category: "Full-stack",
    placeholder: true,
    summary:
      "School portal with FastAPI backend and React frontend: student and teacher roles, activities and assignments, and teacher tools to publish class content. PostgreSQL with Docker Compose.",
    stack: [
      "FastAPI",
      "React",
      "Vite",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker Compose",
    ],
    highlights: [
      "Registration and login with seeded teacher and student demo accounts.",
      "Teachers create activities and assignments; students view school content.",
      "Blue-and-white themed UI; API docs at `/docs` when the stack is running.",
      "Frontend served on port 80 in Docker to mirror production nginx routing.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Portal.git",
      },
    ],
  },
  {
    slug: "pc-website",
    title: "PC Website",
    category: "Full-stack",
    placeholder: true,
    summary:
      "Open-source PC parts / build site: React frontend and FastAPI backend with JWT auth via fastapi-users, async SQLAlchemy, Alembic migrations, and PostgreSQL.",
    stack: [
      "React",
      "FastAPI",
      "fastapi-users",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Docker",
    ],
    highlights: [
      "JWT login with form-encoded credentials (email as username).",
      "Separate Render deployment notes for backend Dockerfile and frontend `VITE_API_BASE_URL`.",
      "Migrations via `alembic upgrade head` required for Postgres deployments.",
      "Local dev: Docker Postgres, uvicorn API, and Vite frontend.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/PC-WEBSITE.git",
      },
    ],
  },
  {
    slug: "realtime-app",
    title: "Real-Time App",
    category: "Full-stack",
    placeholder: true,
    summary:
      "Portfolio project focused on WebSockets and live data — repository is initialized; application source is not committed yet.",
    stack: ["Planned: WebSockets", "React", "FastAPI"],
    highlights: [
      "Reserved repo for demonstrating real-time updates and live data feeds.",
      "Implementation pending — screenshots and case study will follow the first working build.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Real-Time-App.git",
      },
    ],
  },
  {
    slug: "dota-tournament-bracket-maker",
    title: "Dota Tournament Bracket Maker",
    category: "Web Development",
    placeholder: true,
    summary:
      "Flask web app for organizing Dota 2 tournaments with organizer and player roles, registration, session auth, and tournament creation with inline editing.",
    stack: [
      "Flask",
      "SQLAlchemy",
      "Flask-Login",
      "Flask-WTF",
      "SQLite",
      "Jinja2",
    ],
    highlights: [
      "Organizers create and manage tournaments; players register and view events.",
      "Dark-themed responsive UI with role-specific dashboards.",
      "WTForms validation and CSRF protection via Flask-WTF.",
      "SQLite for lightweight local development.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/dota-maker.git",
      },
    ],
  },
  {
    slug: "calculator",
    title: "Calculator",
    category: "Web Development",
    placeholder: true,
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
    placeholder: true,
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
