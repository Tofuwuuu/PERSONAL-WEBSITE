import Link from "next/link";
import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group surface-soft relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.055] focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-text">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
        <span className="mt-1 text-sm text-muted transition group-hover:translate-x-1 group-hover:text-accent">
          →
        </span>
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.stack.slice(0, 4).map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </Link>
  );
}
