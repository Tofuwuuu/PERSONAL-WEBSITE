"use client";

import Link from "next/link";
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
        className="bc-link font-mono text-sm text-slate hover:text-green"
      >
        <span aria-hidden>&larr;</span> Mark Roderick I. Salise
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-heading md:text-4xl">
        All Projects
      </h1>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-navy-lighter text-xs font-bold uppercase tracking-wider text-slate">
              <th scope="col" className="w-20 py-3 pr-4 font-bold">
                Year
              </th>
              <th scope="col" className="py-3 pr-4 font-bold">
                Project
              </th>
              <th scope="col" className="w-40 py-3 pr-4 font-bold">
                Made at
              </th>
              <th scope="col" className="py-3 pr-4 font-bold">
                Built with
              </th>
              <th scope="col" className="w-32 py-3 font-bold">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((project) => {
              const externalLink =
                project.links.find((link) => link.kind === "demo") ??
                project.links.find((link) => link.kind === "repo");

              return (
                <tr
                  key={project.slug}
                  className="group border-b border-navy-lighter/60 transition-colors hover:bg-navy-light/40"
                >
                  <td className="whitespace-nowrap py-5 pr-4 align-top font-mono text-sm text-slate">
                    {project.year}
                  </td>
                  <td className="py-5 pr-4 align-top">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-semibold text-heading transition-colors group-hover:text-green"
                    >
                      {project.title}
                    </Link>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-slate">
                      {project.summary}
                    </p>
                  </td>
                  <td className="whitespace-nowrap py-5 pr-4 align-top text-sm text-slate">
                    {project.madeAt ?? "Personal Project"}
                  </td>
                  <td className="py-5 pr-4 align-top">
                    <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
                      {project.stack.map((tech) => (
                        <li key={tech} className="bc-tech-tag whitespace-nowrap">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-5 align-top">
                    {externalLink ? (
                      <a
                        href={externalLink.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-sm text-slate transition-colors hover:text-green"
                      >
                        {externalLink.href
                          .replace(/^https?:\/\//, "")
                          .replace(/\/$/, "")}
                        <span aria-hidden>&#8599;</span>
                      </a>
                    ) : (
                      <span className="font-mono text-sm text-slate/50">—</span>
                    )}
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
