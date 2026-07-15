import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "hyperledger-blockchain-verification",
    title: "Hyperledger Blockchain System - Alumni Document Verification",
    category: "Blockchain",
    featured: true,
    summary:
      "A capstone thesis project built for Cavite State University - Carmona. Built a permissioned Hyperledger Fabric system for tamper-proof alumni document verification and credential checks.",
    stack: [
      "Hyperledger Fabric",
      "Go/Chaincode",
      "FastAPI",
      "Node.js",
      "Docker",
      "MongoDB",
    ],
    highlights: [
      "Worked on an end-to-end capstone project for Cavite State University - Carmona, including stakeholder feedback, implementation, and delivery.",
      "Stayed adaptable and responsive to the needs of Cavite State University - Carmona throughout the engagement, adjusting to feedback and priorities to get the project committed and delivered.",
      "Designed and implemented a permissioned Hyperledger Fabric network and chaincode to store tamper-proof alumni records.",
      "Built RESTful APIs for credential issuance and verification, integrating smart contracts with backend services.",
      "Implemented admin tooling and deployment scripts to provision the network and nodes.",
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
    title: "Procurement Blockchain System - Freelance Client Project",
    category: "Blockchain",
    summary:
      "Full procurement workflow on Hyperledger Fabric covering purchase orders, approvals, and audit trails.",
    stack: [
      "Hyperledger Fabric",
      "Go/Chaincode",
      "FastAPI",
      "Docker",
      "PostgreSQL",
    ],
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
    category: "Full-stack",
    summary:
      "Multi-user document editing platform with live synchronization and conflict handling.",
    stack: [
      "React",
      "TypeScript",
      "WebSockets",
      "FastAPI",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Built simultaneous multi-user editing with real-time updates.",
      "Implemented WebSocket communication and conflict-resolution logic for concurrent edits.",
      "Designed a clean React and TypeScript interface with intuitive document management.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://collaborative-real-time-document-ed.vercel.app/docs/doc-85e8ea89",
      },
    ],
  },
  {
    slug: "fashion-ecommerce-platform",
    title: "Fashion E-Commerce Platform",
    category: "Full-stack",
    summary:
      "Full-stack fashion storefront with product browsing, variant carts, checkout, orders, and admin tools.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "JWT",
      "Cloudinary",
      "Docker",
      "PayMongo",
    ],
    highlights: [
      "Built a full-stack fashion e-commerce platform with a React, TypeScript, Tailwind CSS, and Zustand frontend connected to a FastAPI backend.",
      "Implemented product browsing, category filters, variant-based carts, checkout flow, order history, and JWT authentication.",
      "Designed admin dashboard workflows for managing products and orders, with Cloudinary media uploads, SQLAlchemy models, PostgreSQL persistence, Dockerized services, and PayMongo sandbox payments.",
    ],
    links: [
      {
        kind: "demo",
        label: "Live Site",
        href: "https://fecommercefashion.vercel.app/",
      },
    ],
  },
  {
    slug: "ai-powered-personal-dashboard",
    title: "AI-Powered Personal Dashboard",
    category: "Web Development",
    placeholder: true,
    summary:
      "Placeholder project. Full-stack AI dashboard that aggregates user data and surfaces intelligent insights.",
    stack: ["React", "TypeScript", "FastAPI", "TBD"],
    highlights: [
      "Placeholder highlight — project overview and key outcomes will be added soon.",
      "Placeholder highlight — technical implementation details coming soon.",
      "Placeholder highlight — results and impact summary coming soon.",
    ],
    links: [
      { kind: "demo", label: "Live Site", href: "#" },
      { kind: "repo", label: "Repo", href: "#" },
    ],
  },
  {
    slug: "portal",
    title: "Portal",
    category: "Web Development",
    placeholder: true,
    summary:
      "Placeholder project. Web portal for centralized access, workflows, and user-facing services.",
    stack: ["React", "TypeScript", "TBD"],
    highlights: [
      "Placeholder highlight — portal scope and user flows will be documented soon.",
      "Placeholder highlight — authentication and role-based views coming soon.",
      "Placeholder highlight — deployment and integration notes coming soon.",
    ],
    links: [
      { kind: "demo", label: "Live Site", href: "#" },
      { kind: "repo", label: "Repo", href: "#" },
    ],
  },
  {
    slug: "pc-website",
    title: "PC Website",
    category: "Web Development",
    placeholder: true,
    summary:
      "Placeholder project. Marketing and product website for PC-related services or hardware offerings.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "TBD"],
    highlights: [
      "Placeholder highlight — site structure and content strategy coming soon.",
      "Placeholder highlight — responsive layout and performance goals coming soon.",
      "Placeholder highlight — launch details and analytics plan coming soon.",
    ],
    links: [
      { kind: "demo", label: "Live Site", href: "#" },
      { kind: "repo", label: "Repo", href: "#" },
    ],
  },
  {
    slug: "employee-inventory-management-system",
    title: "Employee & Inventory Management System",
    category: "Full-stack",
    placeholder: true,
    summary:
      "Placeholder project. Full-stack employee and inventory management system with role-based access, CRUD workflows, and reporting.",
    stack: [
      "PHP",
      "Laravel",
      "MySQL",
      "Blade",
      "Bootstrap",
      "JavaScript",
      "REST API",
      "Git",
      "Laravel Breeze",
    ],
    highlights: [
      "Placeholder highlight — employee records, roles, and inventory tracking workflows coming soon.",
      "Placeholder highlight — Laravel backend, MySQL persistence, and REST API integration coming soon.",
      "Placeholder highlight — Blade UI, Bootstrap layout, and Laravel Breeze authentication coming soon.",
    ],
    links: [
      { kind: "demo", label: "Live Site", href: "#" },
      { kind: "repo", label: "Repo", href: "#" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
