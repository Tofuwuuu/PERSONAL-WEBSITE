export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    items: ["Node.js", "REST APIs", "PostgreSQL"]
  },
  {
    title: "Tools",
    items: ["Git", "CI/CD", "Testing"]
  }
];

