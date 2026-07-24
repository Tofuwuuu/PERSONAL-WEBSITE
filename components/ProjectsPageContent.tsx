"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/content/types";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";

const CATEGORY_ORDER = ["Blockchain", "Full-stack", "Web Development"];

export function ProjectsPageContent({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const fromProjects = Array.from(new Set(projects.map((p) => p.category)));
    const ordered = CATEGORY_ORDER.filter((category) =>
      fromProjects.includes(category)
    );
    const rest = fromProjects.filter(
      (category) => !CATEGORY_ORDER.includes(category)
    );

    return ["All", ...ordered, ...rest];
  }, [projects]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };

    projects.forEach((project) => {
      counts[project.category] = (counts[project.category] ?? 0) + 1;
    });

    return counts;
  }, [projects]);

  const visibleProjects = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return [...filtered].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
    );
  }, [activeCategory, projects]);

  const liveCount = projects.filter((p) =>
    p.links.some(
      (link) =>
        link.kind === "demo" &&
        link.href.length > 0 &&
        link.href !== "#" &&
        !link.href.startsWith("#")
    )
  ).length;
  const featuredCount = projects.filter((p) => p.featured).length;

  return (
    <div>
      <header className="surface relative mb-5 overflow-hidden rounded-2xl md:mb-6">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
        <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-violet/10 blur-3xl" />

        <div className="relative grid gap-6 p-5 md:grid-cols-[1.2fr_0.8fr] md:items-end md:p-6 lg:gap-8 lg:p-7">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent/85">
              Selected work
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-text md:text-3xl lg:text-4xl">
              Projects
            </h1>
            <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted md:text-[0.9375rem]">
              Case studies across blockchain, full-stack builds, and web
              development — each with goals, technical decisions, and live links
              where available.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { label: "Projects", value: String(projects.length) },
              { label: "Live demos", value: String(liveCount) },
              { label: "Featured", value: String(featuredCount) },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-center shadow-inner shadow-black/20 sm:px-4"
              >
                <p className="text-lg font-semibold text-accent sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted sm:text-[0.65rem]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative border-t border-white/10 px-5 py-4 md:px-6 md:py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Filter by category
            </p>
            <p className="text-xs text-muted">
              Showing{" "}
              <span className="font-semibold text-text">
                {visibleProjects.length}
              </span>{" "}
              of {projects.length}
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              const count = categoryCounts[category] ?? 0;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent",
                    isActive
                      ? "bg-accent text-bg shadow-sm shadow-accent/25"
                      : "border border-white/10 bg-white/[0.04] text-muted hover:border-accent/35 hover:bg-white/[0.07] hover:text-text",
                  ].join(" ")}
                >
                  <span>{category}</span>
                  <span
                    className={[
                      "rounded-full px-2 py-0.5 text-[0.65rem] font-bold",
                      isActive
                        ? "bg-bg/20 text-bg"
                        : "bg-white/10 text-muted",
                    ].join(" ")}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <ProjectsCarousel projects={visibleProjects} />
    </div>
  );
}
