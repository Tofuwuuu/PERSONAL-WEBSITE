import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    id: "freelance",
    company: "Freelance / Self-Employed",
    role: "Full Stack Software Engineer",
    start: "2024",
    end: "2025",
    bullets: [
      "Built a procurement platform for a paying client: purchase requests, canvassing, purchase orders, inspections, and inventory, with a separate role for each step.",
      "Connected the React front end to Python APIs and logged workflow changes so the client could see who did what.",
      "Left a Docker setup so the same stack could be started again without a one-off install.",
    ],
    tech: ["React", "TypeScript", "Python", "FastAPI", "MongoDB", "Docker"],
  },
  {
    id: "go-crayons",
    company: "Go Crayons",
    role: "Web Developer Intern",
    start: "2024",
    end: "2024",
    bullets: [
      "Built and maintained WordPress pages across several client sites.",
      "Audited five client WordPress sites, wrote a report for each covering on-page SEO, page speed, accessibility, and security, then made the fixes.",
      "Found and fixed UX bugs like broken links and a contact form that sent with empty fields, checking each change with the team before it went out.",
    ],
    tech: ["WordPress", "On-page SEO", "Site audits", "GTmetrix", "JavaScript", "HTML", "CSS", "Git"],
    links: [
      { label: "mountstudio.com.sg", href: "https://mountstudio.com.sg" },
      { label: "winningatlove.com", href: "https://winningatlove.com" },
      { label: "mytires4less.com", href: "https://mytires4less.com" },
      { label: "fredearlstevens.com", href: "https://fredearlstevens.com" },
      { label: "band-itsfitness.com", href: "https://band-itsfitness.com" },
    ],
  },
];
