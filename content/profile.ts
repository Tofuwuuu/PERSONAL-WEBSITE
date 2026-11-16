import type { ExternalLink } from "./types";

export const profile = {
  name: "Mark Roderick I. Salise",
  role: "Junior Software Engineer",
  tagline: "Full-stack web apps, built and shipped live.",
  pitch: "Full-stack web apps, built and shipped live.",
  email: "rodericksalise812@gmail.com",
  resume: {
    href: "/resume.pdf",
    fileName: "Mark_Salise_Resume.pdf",
  },
  about: [
    "I'm a Computer Science graduate from Cavite State University, Carmona Campus (2025).",
    "For the past two years I've built and deployed full-stack apps: a procurement platform for a paying client, an alumni credential system for my university, and AI tools I run and maintain myself.",
    "I work across React, TypeScript, FastAPI, Laravel, SQL, and Docker, and I document what I build so someone else can run it.",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Tofuwuuu" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mark-roderick-salise-8ab9161a4/",
    },
  ] satisfies ExternalLink[],
} as const;
