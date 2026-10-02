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
      { label: "Mount Studio", href: "https://mountstudio.com.sg" },
      { label: "Winning at Love", href: "https://winningatlove.com" },
      { label: "My Tires 4 Less", href: "https://mytires4less.com" },
      { label: "Fred Earl Stevens", href: "https://fredearlstevens.com" },
      { label: "Band-ITS Fitness", href: "https://band-itsfitness.com" },
    ],
  },
];
