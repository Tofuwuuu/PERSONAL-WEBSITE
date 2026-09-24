import type { ExternalLink } from "./types";

export const profile = {
  name: "Mark Roderick I. Salise",
  role: "Software Engineer",
  tagline:
    "Junior software engineer. TypeScript, Python, and full-stack apps I can run and explain.",
  location: "San Pedro, Laguna, Philippines",
  email: "rodericksalise812@gmail.com",
  intro: [
    "I'm Mark, a junior software engineer in San Pedro, Laguna. I studied Computer Science at Cavite State University, and I'm looking for a role where I can ship full-stack work with a team.",
    "I build React and TypeScript front ends, Python and FastAPI backends, and Docker setups I can start on my own machine. Capstone was a Hyperledger Fabric system for alumni document checks at CvSU Carmona. I also shipped a procurement platform for a paying freelance client.",
    "A few projects below have a live site. The rest run locally with Docker — each write-up says which.",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Tofuwuuu" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mark-roderick-salise-8ab9161a4/",
    },
  ] satisfies ExternalLink[],
} as const;
