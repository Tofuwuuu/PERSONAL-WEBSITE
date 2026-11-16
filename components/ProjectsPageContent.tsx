"use client";

import Link from "next/link";
import { ProjectStatusChip } from "@/components/ProjectStatusChip";
import type { Project } from "@/content/types";

function sortByYearDesc(projects: Project[]) {
  return [...projects].sort((a, b) => Number(b.year) - Number(a.year));
}

export function ProjectsPageContent({ projects }: { projects: Project[] }) {
  const sorted = sortByYearDesc(projects);

  return (
    <div>
      <Link
        href="/"
        className="text-sm text-muted transition-colors duration-150 hover:text-accent"
      >
        <span aria-hidden>&larr;</span> Mark Roderick I. Salise
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-text md:text-4xl">
        All Projects
      </h1>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line text-xs font-bold uppercase tracking-wider text-muted">
              <th scope="col" className="w-16 py-3 pr-4 font-bold">
                Year
              </th>
              <th scope="col" className="w-64 py-3 pr-4 font-bold">
                Project
              </th>
              <th scope="col" className="w-40 py-3 pr-4 font-bold">
                Made at
              </th>
              <th scope="col" className="py-3 pr-4 font-bold">
                Built with
              </th>
              <th scope="col" className="py-3 font-bold">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((project) => {
              return (
                <tr
                  key={project.slug}
                  className="group border-b border-line/60 transition-colors hover:bg-surface/40"
                >
                  <td className="whitespace-nowrap py-3.5 pr-4 align-top text-sm tabular-nums text-muted">
                    {project.year}
                  </td>
                  <td className="py-3.5 pr-4 align-top">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-semibold text-text transition-colors group-hover:text-accent"
                    >
                      {project.title}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap py-3.5 pr-4 align-top text-sm text-muted">
                    {project.madeAt ?? "Personal Project"}
                  </td>
                  <td className="py-3.5 pr-4 align-top">
                    <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                      {project.stack.map((tech) => (
                        <li key={tech} className="whitespace-nowrap text-xs text-muted">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-3.5 align-top">
                    <ProjectStatusChip project={project} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
