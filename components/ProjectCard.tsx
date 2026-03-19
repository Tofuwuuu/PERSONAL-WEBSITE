import Link from "next/link";
import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block rounded-2xl border border-white/10 bg-card p-6 transition hover:border-white/20 hover:bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-text">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
        <span className="mt-1 text-sm text-muted transition group-hover:text-text">
          →
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </Link>
  );
}

