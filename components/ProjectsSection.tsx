import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ProjectStatusChip } from "@/components/ProjectStatusChip";
import { Section } from "@/components/Section";
import { getProjectCardImage } from "@/content/projectImages";
import { projects } from "@/content/projects";

/** Gym App Tracker leads the list. */
const LEAD = "gym-app-tracker";

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const ordered = [
    ...featured.filter((p) => p.slug === LEAD),
    ...featured.filter((p) => p.slug !== LEAD),
  ];

  return (
    <Section id="projects" number="02." title="Projects">
      <div className="relative">
        <div aria-hidden className="projects-glow" />
        <ul className="relative space-y-5">
          {ordered.map((project) => {
            const cardImage = getProjectCardImage(project.slug);

            return (
              <li key={project.slug}>
                <FadeIn>
                  <div className="project-row chamfer-card spring group relative isolate p-5 sm:p-6 lg:grid lg:grid-cols-[200px_1fr] lg:items-start lg:gap-6">
                    <span aria-hidden className="corner-brackets" />
                    {cardImage ? (
                      <div className="project-thumb relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-md border border-green/20 lg:mb-0">
                        <Image
                          src={cardImage.src}
                          alt={cardImage.alt}
                          fill
                          className="object-cover object-top"
                          sizes="(min-width: 1024px) 200px, (min-width: 680px) 632px, 100vw"
                        />
                        <span aria-hidden className="project-thumb-tint" />
                      </div>
                    ) : null}
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-heading">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="link-arrow inline-flex items-start gap-1.5 rounded-sm underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
                        >
                          <span>{project.title}</span>
                          <span aria-hidden className="arrow text-slate">
                            ↗
                          </span>
                        </Link>
                      </h3>
                      <p className="mt-2 line-clamp-2 text-base leading-relaxed text-slate">
                        {project.summary}
                      </p>
                      {/* Stack tags and the Live / UI preview chip share one row that wraps naturally. */}
                      <ul
                        className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2"
                        data-testid="tag-row"
                      >
                        {project.stack.slice(0, 6).map((tech) => (
                          <li key={tech} className="bc-tech-tag">
                            {tech}
                          </li>
                        ))}
                        <li className="flex">
                          <ProjectStatusChip project={project} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-6">
        <Link href="/projects" className="bc-link font-mono text-sm">
          View Full Project Archive
        </Link>
      </div>
    </Section>
  );
}
