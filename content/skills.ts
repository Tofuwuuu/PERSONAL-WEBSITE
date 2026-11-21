export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React 18", "TypeScript", "React Router", "Bootstrap 5"]
  },
  {
    title: "Backend",
    items: ["FastAPI", "REST APIs", "MongoDB / motor", "PostgreSQL"]
  },
  {
    title: "Tools",
    items: ["Git", "CI/CD", "Jest + Testing Library"]
  }
];

