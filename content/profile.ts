import type { ExternalLink } from "./types";

export const profile = {
  name: "Mark Roderick I. Salise",
  role: "Software Engineer",
  tagline:
    "I build accessible, production-ready web applications with clean interfaces, reliable APIs, and thoughtful engineering.",
  location: "Philippines",
  email: "rodericksalise812@gmail.com",
  intro: [
    "I'm Mark, and I like building things that work. I'm a software engineer focused on full-stack delivery — from React interfaces and TypeScript front ends to Python APIs, databases, and containerized deployments.",
    "My work includes AI document processing pipelines, blockchain-backed verification systems, procurement workflow platforms, and deployed demos used in real stakeholder contexts. I care about clear structure, practical error handling, and code that teammates can pick up and extend.",
    "I graduated with a BS in Computer Science from Cavite State University and I'm looking for opportunities where I can ship features end to end, learn from strong engineers, and grow in cloud-native and AI-enabled product development.",
    "I'm proficient with AI-assisted development tools — Claude (Sonnet, Opus), Fable, and others — using them daily to explore approaches, accelerate refactoring, and ship production code faster without sacrificing quality.",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Tofuwuuu" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mark-roderick-salise-8ab9161a4/",
    },
  ] satisfies ExternalLink[],
} as const;
