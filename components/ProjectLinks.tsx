import { projectLinks } from "@/content/featured";
import type { Project } from "@/content/types";

const linkClass =
  "inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 transition-colors duration-150 hover:underline";

export function ProjectLinks({ project }: { project: Project }) {
  const { live, code } = projectLinks(project);
  if (!live && !code) return null;

  return (
    <p className="flex flex-wrap gap-x-5 gap-y-1">
      {live ? (
        <a
          href={live.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          title={live.isPreview ? "UI preview. The screens load, but login is turned off in this demo." : undefined}
        >
          {live.isPreview ? "UI preview" : "Live"}
          <span aria-hidden>↗</span>
          <span className="sr-only">: {project.title} (opens in a new tab)</span>
        </a>
      ) : null}
      {code ? (
        <a href={code} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Code
          <span aria-hidden>↗</span>
          <span className="sr-only">: {project.title} on GitHub (opens in a new tab)</span>
        </a>
      ) : null}
    </p>
  );
}
