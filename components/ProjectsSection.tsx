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
      <ul className="border-t border-navy-lighter">
        {ordered.map((project) => {
          const cardImage = getProjectCardImage(project.slug);

          return (
            <li key={project.slug} className="border-b border-navy-lighter">
              <FadeIn>
                <div className="project-row group relative py-6">
                  {cardImage ? (
                    <>
                      {/* Phone and tablet: screenshot sits inline above the text. */}
                      <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-md border border-navy-lighter lg:hidden">
                        <Image
                          src={cardImage.src}
                          alt={cardImage.alt}
                          fill
                          className="object-cover object-top"
                          sizes="(min-width: 680px) 632px, 100vw"
                        />
                      </div>
                      {/* PC: screenshot appears beside the list on hover or focus. */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute left-full top-6 ml-8 hidden aspect-[16/10] w-64 overflow-hidden rounded-md border border-navy-lighter opacity-0 transition-opacity duration-200 motion-reduce:transition-none group-focus-within:opacity-100 group-hover:opacity-100 lg:block"
                      >
                        <Image
                          src={cardImage.src}
                          alt=""
                          fill
                          className="object-cover object-top"
                          sizes="256px"
                        />
                      </div>
                    </>
                  ) : null}
                  <h3 className="text-lg font-semibold text-heading">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-start gap-1.5 rounded-sm underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
                    >
                      <span>{project.title}</span>
                      <span aria-hidden className="text-slate">
                        ↗
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-base leading-relaxed text-slate">
                    {project.summary}
                  </p>
                  {/* Stack tags and the Live / UI preview chip share one row that wraps naturally. */}
                  <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2" data-testid="tag-row">
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
