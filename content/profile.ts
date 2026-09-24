import type { ExternalLink } from "./types";

export const profile = {
  name: "Mark Roderick I. Salise",
  role: "Software Engineer",
  tagline:
    "Junior software engineer — TypeScript, Python, and full-stack apps I can actually run and explain.",
  location: "San Pedro, Laguna, Philippines",
  email: "rodericksalise812@gmail.com",
  intro: [
    "I'm Mark. I have a BS in Computer Science from Cavite State University, and I live in San Pedro, Laguna. I'm looking for a junior software engineer role.",
    "I build React and TypeScript front ends, Python and FastAPI backends, and Docker setups I can start on my own machine. My capstone was a Hyperledger Fabric app for alumni document checks at CvSU Carmona. I also built a procurement platform for a paying client.",
    "A few projects below have a live site. The rest run locally with Docker. Each write-up says which.",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Tofuwuuu" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mark-roderick-salise-8ab9161a4/",
    },
  ] satisfies ExternalLink[],
} as const;
