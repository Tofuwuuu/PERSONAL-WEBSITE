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
      "Fixed client-facing bugs and checked the change with the team before it went out.",
      "Updated sites and followed issues across more than one account.",
      "Replied to clients while other requests were still in progress.",
    ],
    tech: ["JavaScript", "HTML", "CSS", "Git"],
  },
];
