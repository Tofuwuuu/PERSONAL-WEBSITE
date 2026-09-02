import type { Experience } from "./types";

export const experience: Experience[] = [
  {
    id: "freelance",
    company: "Freelance / Self-Employed",
    role: "Full Stack Software Engineer",
    start: "2024",
    end: "2025",
    bullets: [
      "Delivered a multi-stage procurement platform with automated approval workflows, role-based access, and integrated modules for a paying client.",
      "Built REST API integrations between React front ends and Python services using structured JSON contracts and audit logging.",
      "Deployed and maintained Docker-based environments with setup documentation for repeatable delivery.",
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
      "Resolved client-facing technical issues and coordinated fixes with the team before release.",
      "Supported website updates, quality checks, and issue follow-through across multiple accounts.",
      "Maintained clear communication in a service-oriented environment while handling concurrent requests.",
    ],
    tech: ["JavaScript", "HTML", "CSS", "Git"],
  },
];
