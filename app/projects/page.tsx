import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted md:text-base">
          A curated set of work. Each project page includes the goal, key
          decisions, and links.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

