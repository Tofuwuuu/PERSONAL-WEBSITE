import type { ExternalLink } from "./types";

export const profile = {
  name: "Your Name",
  role: "Full‑stack Developer",
  tagline: "I build clean, fast, user-focused web experiences.",
  location: "City, Country",
  email: "you@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" }
  ] satisfies ExternalLink[]
} as const;

