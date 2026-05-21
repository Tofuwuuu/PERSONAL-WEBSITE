import Link from "next/link";
import { Section } from "@/components/Section";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  const featured = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ].slice(0, 3);

  return (
    <Section
      title="Projects"
      eyebrow={
        <span className="inline-flex items-center gap-2">
          Selected proof{" "}
          <Link
            href="/projects"
            className="rounded-md text-text underline decoration-white/15 underline-offset-4 hover:decoration-accent/70 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            View all
          </Link>
        </span>
      }
    >
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
