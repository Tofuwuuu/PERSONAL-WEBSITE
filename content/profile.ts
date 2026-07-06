import type { ExternalLink } from "./types";

export const profile = {
  name: "Mark Roderick I. Salise",
  role: "Entry-Level Full-Stack Developer",
  tagline:
    "I create web apps with clean UI, API integrations, and hands-on project experience in dashboards, document verification, and full-stack workflows.",
  location: "Philippines",
  email: "rodericksalise813@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/Tofuwuuu" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mark-roderick-salise-8ab9161a4/",
    },
  ] satisfies ExternalLink[],
} as const;
