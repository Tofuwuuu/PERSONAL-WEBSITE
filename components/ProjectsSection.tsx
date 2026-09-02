"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Section } from "@/components/Section";
import { getProjectCardImage } from "@/content/projectImages";
import { projects } from "@/content/projects";

export function ProjectsSection() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const featured = [
    ...projects.filter((project) => project.featured),
    ...projects.filter((project) => !project.featured),
  ].slice(0, 4);

  const hoveredProject = featured.find((project) => project.slug === hoveredSlug);
  const hoveredImage = hoveredProject
    ? getProjectCardImage(hoveredProject.slug)
    : null;

  return (
    <Section id="projects" number="03." title="Projects">
      <div className="relative">
        {hoveredImage ? (
          <div
            className="pointer-events-none absolute -right-4 top-6 z-10 hidden w-[45%] transition-all duration-500 ease-out lg:block xl:-right-16"
            aria-hidden
          >
            <div className="relative aspect-video overflow-hidden rounded-lg border-2 border-navy-lighter shadow-2xl shadow-black/40">
              <Image
                src={hoveredImage.src}
                alt=""
                fill
                className="object-cover object-top"
                sizes="320px"
              />
            </div>
          </div>
        ) : null}

        <ul className="space-y-12">
          {featured.map((project) => {
            const externalLink =
              project.links.find((link) => link.kind === "demo") ??
              project.links.find((link) => link.kind === "repo");

            return (
              <li
                key={project.slug}
                className="group"
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                onFocus={() => setHoveredSlug(project.slug)}
                onBlur={() => setHoveredSlug(null)}
              >
                <div className="relative rounded transition-colors lg:-mx-4 lg:p-4 lg:hover:bg-navy-light/40">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-lg font-medium text-slate transition-colors group-hover:text-green">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2"
                      >
                        <span>{project.title}</span>
                        <span className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          ↗
                        </span>
                      </Link>
                    </h3>
                    {externalLink ? (
                      <a
                        href={externalLink.href}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 font-mono text-xs text-slate transition hover:text-green"
                      >
                        {externalLink.label}
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {project.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {project.stack.slice(0, 6).map((tech) => (
                      <li key={tech} className="bc-tech-tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-10">
        <Link href="/projects" className="bc-link font-mono text-sm">
          View Full Project Archive
        </Link>
      </div>
    </Section>
  );
}
