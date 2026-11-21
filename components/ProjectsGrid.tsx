"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/content/types";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";

const CATEGORY_ORDER = ["Blockchain", "Full-stack", "Web Development"];

export function ProjectsGrid({
  projects,
  compact = false,
  carousel = false,
}: {
  projects: Project[];
  compact?: boolean;
  carousel?: boolean;
}) {
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
      <div className={`flex flex-wrap gap-2 ${compact ? "mb-4" : "mb-6"}`}>
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
                  : "border border-white/10 bg-white/[0.028] text-muted hover:border-accent/35 hover:text-text"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {carousel ? (
        <ProjectsCarousel projects={visibleProjects} />
      ) : (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ${
            compact ? "gap-3" : "gap-4"
          }`}
        >
          {visibleProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} compact={compact} />
          ))}
        </div>
      )}
    </div>
  );
}
