import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "ai-ops-assistant",
    title: "AI Ops Archivist",
    category: "AI & Automation",
    year: "2026",
    madeAt: "Personal Project",
    featured: true,
    summary:
      "A React dashboard where you submit a support request, a FastAPI agent drafts a reply, and nothing goes out until a person approves it.",
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
      "Live site is the React UI on Vercel. The login screen includes a seeded demo account.",
      "The agent classifies the request, pulls matching notes, writes a draft, and waits. Approve or reject is a manual step.",
      "Postgres, Redis, the worker, and n8n run together with Docker Compose. That is the full local setup.",
      "With no LLM API key, the same pipeline uses a mock adapter and still finishes a draft.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://ai-ops-assistant-wheat.vercel.app/",
      },
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/AI-Ops-Assistant",
      },
    ],
  },
  {
    slug: "hyperledger-blockchain-verification",
    title: "Alumni Document Verification",
    category: "Blockchain",
    year: "2025",
    madeAt: "Capstone, CvSU Carmona",
    featured: true,
    summary:
      "Capstone for CvSU Carmona: a Hyperledger Fabric network that stores alumni document records, with a React app and a FastAPI API in front of it.",
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
      "Repo only. The hosted API is down, so there is no live site.",
      "Chaincode writes alumni credential records. The API issues documents and checks them against the ledger.",
      "The React (Vite) app talks to FastAPI. MongoDB holds the application data.",
      "Fabric, the API, and the UI start from the Docker setup in the repo.",
    ],
    links: [
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Hyperledger-Document-Verification-",
      },
    ],
  },
  {
    slug: "procurement-blockchain-system",
    title: "Procurement Platform",
    category: "Blockchain",
    year: "2025",
    madeAt: "Freelance Client",
    featured: true,
    summary:
      "Paid client work: a Philippine procurement app for purchase requests, canvassing, purchase orders, inspections, and inventory. Inspection events are written to Hyperledger Fabric.",
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
      "Repo only. There is no live site. The Vercel page is a UI shell because the API is still a placeholder, so login and workflows do not run.",
      "Roles in the app include admin, canvasser, validator, finance, auditor, and custodian.",
      "Inspection reports go on Fabric. The other workflow records sit in MongoDB, with a simple stage dashboard.",
      "Fabric, the API, and the React app run from the Docker Compose setup in the repo.",
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
    slug: "gym-app-tracker",
    title: "Gym App Tracker",
    category: "Full-stack",
    year: "2026",
    madeAt: "Personal Project",
    featured: true,
    summary:
      "A workout logger modeled on Strong and Hevy. Log sets, save routines, and look back at your history. Try it with the demo account. Data resets every night.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "Docker Compose",
    ],
    highlights: [
      "Live on Vercel with a Neon Postgres database. Sign in with the demo account on the sign-in page.",
      "Docker Compose starts the Next.js app and Postgres. Auth.js handles email and password sign-in.",
      "You can log a workout with a rest timer, reuse routine templates, and open past sessions.",
      "From the repo: `docker compose up --build`, then open localhost:3000. Prisma applies migrations on boot.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://gym-app-tracker-gamma.vercel.app",
      },
      {
        kind: "repo",
        label: "Repo",
        href: "https://github.com/Tofuwuuu/Gym-App-Tracker",
      },
    ],
  },
  {
    slug: "on-chain-wallet-risk-analyzer",
    title: "Wallet Risk Analyzer",
    category: "Blockchain",
    year: "2025",
    madeAt: "Personal Project",
    summary:
      "Paste an Ethereum address and get a 0–100 risk score plus a report you can compare or export. Local Docker only.",
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
      "Repo only. No live site.",
      "The score weighs mixer exposure, scam tokens, and transfer patterns.",
      "You can save a report, compare two wallets, and export PDF or HTML.",
      "It still runs with Docker when API keys are missing, using fixed heuristics. Interactive docs are at `/docs` once the API is up.",
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
      "A calendar to-do list that stores tasks on Sepolia. Connect MetaMask, add a task, and the Solidity contract keeps it.",
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
      "Calendar UI for adding, completing, and deleting tasks for the connected wallet.",
      "Tasks are stored per address on a Sepolia contract.",
      "Hardhat scripts in the repo cover compile, test, and deploy.",
      "The front end is on Vercel and expects MetaMask.",
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
      "A React dashboard that connects a wallet and shows DeFi positions in one view. The site is on Vercel.",
    stack: ["React", "TypeScript", "Web3", "Vite", "Vercel"],
    highlights: [
      "Connect a wallet and load balances and positions.",
      "One dashboard page for the holdings it can read.",
      "Live site is on Vercel. Source is in the repo.",
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
    title: "Collaborative Doc Editor",
    category: "Full-stack",
    year: "2025",
    madeAt: "Personal Project",
    featured: true,
    summary:
      "Two people can edit one document at the same time. The React page syncs over WebSockets to FastAPI, and Redis stores the document.",
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
      "Live site is on Vercel. The API and Redis are on Render and can cold-start, so the first request after idle time may take a few seconds.",
      "Edits show up for the other person while you type, with conflict handling when you change the same spot.",
      "API and WebSocket URLs come from env vars, so local and deployed setups use the same code.",
      "The repo includes Docker notes if you want to run the stack yourself.",
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
    title: "Atelier Commerce",
    category: "Full-stack",
    year: "2025",
    madeAt: "Personal Project",
    summary:
      "A small fashion store: browse products, add a size to the cart, check out with the PayMongo sandbox, and manage products in an admin page.",
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
      "Shoppers can browse, cart, and check out. The admin page creates and edits products and orders.",
      "PayMongo sandbox is used when keys are set. Without keys, checkout falls back to a mock payment so the flow still finishes.",
      "Auth is JWT. Postgres runs in Docker for local work, with SQLAlchemy and Alembic.",
      "The storefront is on Vercel. Backend deploy notes in the repo point at Railway.",
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
    featured: true,
    summary:
      "Upload a PDF or image and get the text, names, keywords, and contract risk flags back. It all runs in your browser, and your file stays on your device.",
    stack: ["React", "TypeScript", "pdf.js", "Tesseract.js", "FastAPI"],
    highlights: [
      "Live on Vercel. Try the sample document, or upload your own PDF or image.",
      "PyMuPDF reads PDFs. Tesseract reads images. spaCy pulls out names and other entities.",
      "Uploading the same file again is skipped. The API hashes the bytes with SHA-256 and caches the result in Redis.",
      "Optional JWT login so uploads belong to the signed-in user.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://smartdoc-analyzer.vercel.app",
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
      "A calculator in plain HTML, CSS, and JavaScript. Keyboard input works, and dividing by zero does not break it. No build step.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Add, subtract, multiply, divide, clear, backspace, and decimals.",
      "Keyboard: digits, operators, Enter, Escape, and Backspace.",
      "Open `index.html` directly, or use the included `render.yaml` for a static Render site.",
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
    title: "Vanilla JS Todo",
    category: "Web Development",
    year: "2024",
    madeAt: "Personal Project",
    summary:
      "A to-do list in HTML, CSS, and JavaScript. Add a task, check it off, delete it. No framework and no build.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "The list is updated in the DOM. Nothing is sent to a server.",
      "Can be hosted as a static site. The repo includes an optional `render.yaml`.",
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
