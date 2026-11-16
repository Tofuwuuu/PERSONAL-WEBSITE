import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    id: "independent",
    role: "Independent Software Development",
    start: "Sep 2025",
    end: "Present",
    bullets: [
      "Design, build, and deploy full-stack apps end to end, including AI Ops Archivist and SmartDoc Analyzer, both with live demos.",
      "Write the REST APIs, PostgreSQL schemas and migrations, Docker setups, and setup docs for each project.",
    ],
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "freelance",
    role: "Software Engineer",
    company: "Freelance / Self-Employed",
    start: "Jan 2024",
    end: "Jan 2025",
    bullets: [
      "Built a procurement platform for a paying client: purchase requests, canvassing, purchase orders, inspections, and inventory, with a separate role for each step.",
      "Connected the React front end to FastAPI and MongoDB, logged workflow changes so the client could see who did what, and wrote handoff docs so they could run it.",
    ],
    tech: ["React", "TypeScript", "Python", "FastAPI", "MongoDB", "Docker"],
  },
  {
    id: "go-crayons",
    role: "Web Developer Intern",
    company: "Go Crayons",
    start: "Jun 2024",
    end: "Aug 2024",
    bullets: [
      "Audited five client WordPress sites for on-page SEO, page speed, accessibility, and security, wrote a report for each, and made the fixes.",
      "Found and fixed UX bugs like broken links and a contact form that sent with empty fields, checking each change with the team before it went out.",
    ],
    tech: ["WordPress", "On-page SEO", "JavaScript", "HTML", "CSS", "Git"],
  },
];
