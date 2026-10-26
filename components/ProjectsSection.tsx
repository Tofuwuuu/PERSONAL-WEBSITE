import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { ProjectStatusChip } from "@/components/ProjectStatusChip";
import { Section } from "@/components/Section";
import { getProjectCardImage } from "@/content/projectImages";
import { projects } from "@/content/projects";

/** Gym App Tracker leads and spans both columns on PC. */
const LEAD = "gym-app-tracker";

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const ordered = [
    ...featured.filter((p) => p.slug === LEAD),
    ...featured.filter((p) => p.slug !== LEAD),
  ];

  return (
    <Section id="projects" number="02." title="Projects">
      <ul className="grid gap-6 lg:grid-cols-2">
        {ordered.map((project) => {
          const cardImage = getProjectCardImage(project.slug);
          const lead = project.slug === LEAD;

          return (
            <li key={project.slug} className={lead ? "lg:col-span-2" : undefined}>
              <FadeIn className="h-full">
                <div className="project-card group flex h-full flex-col gap-4 rounded-lg border border-navy-lighter bg-navy-light p-4">
                  {cardImage ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-navy-lighter">
                      <Image
                        src={cardImage.src}
                        alt={cardImage.alt}
                        fill
                        className="object-cover object-top"
                        sizes={lead ? "(min-width: 1024px) 600px, 100vw" : "(min-width: 1024px) 300px, 100vw"}
                      />
                    </div>
                  ) : null}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <h3 className="text-base font-medium text-heading transition-colors group-hover:text-green">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-start gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                      >
                        <span>{project.title}</span>
                        <span aria-hidden className="mt-0.5 inline-block">
                          ↗
                        </span>
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate">
                      {project.summary}
                    </p>
                    <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-2 pt-4">
                      <ul className="flex flex-wrap gap-x-3 gap-y-1">
                        {project.stack.slice(0, 6).map((tech) => (
                          <li key={tech} className="bc-tech-tag">
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <ProjectStatusChip project={project} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </li>
          );
        })}
      </ul>
      <div className="mt-6">
        <Link href="/projects" className="bc-link font-mono text-sm">
          View Full Project Archive
        </Link>
      </div>
    </Section>
  );
}
