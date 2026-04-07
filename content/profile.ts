import type { ExternalLink } from "./types";

export const profile = {
  name: "Mark Roderick I. Salise",
  role: "Full‑stack Engineer",
  tagline:
    "I build reliable web apps and the systems behind them, from polished UIs to APIs, queues, and blockchain-backed verification.",
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

