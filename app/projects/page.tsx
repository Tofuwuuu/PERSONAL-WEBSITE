import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="py-8 md:py-12">
      <header className="surface mb-8 rounded-3xl p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/80">
          Selected work
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text md:text-5xl">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted md:text-base">
          A curated set of work. Each project page includes the goal, key
          decisions, and links.
        </p>
      </header>

      <ProjectsGrid projects={projects} />
    </div>
  );
}
