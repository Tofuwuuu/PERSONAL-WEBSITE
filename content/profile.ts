import type { ExternalLink } from "./types";

export const profile = {
  name: "Mark Roderick I. Salise",
  role: "Full‑stack Developer",
  tagline: "I build clean, fast, user-focused web experiences.",
  location: "Philippines",
  email: "rodericksalise813@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/Tofuwuuu" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mark-roderick-salise-8ab9161a4/"
    }
  ] satisfies ExternalLink[]
} as const;

