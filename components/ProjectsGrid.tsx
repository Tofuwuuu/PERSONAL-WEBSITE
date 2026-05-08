"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/content/types";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  const visibleProjects = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return [...filtered].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
    );
  }, [activeCategory, projects]);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent ${
                isActive
                  ? "bg-accent text-bg"
                  : "border border-white/10 bg-white/[0.035] text-muted hover:border-accent/35 hover:text-text"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {visibleProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
