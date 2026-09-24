import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { getProjectCardImage } from "@/content/projectImages";
import { projects } from "@/content/projects";

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);

  return (
    <Section id="projects" number="03." title="Projects">
      <ul className="space-y-4">
        {featured.map((project) => {
          const externalLink =
            project.links.find((link) => link.kind === "demo") ??
            project.links.find((link) => link.kind === "repo");
          const cardImage = getProjectCardImage(project.slug);

          return (
            <li key={project.slug} className="group">
              <div className="flex flex-col gap-2.5 rounded-md transition-colors sm:flex-row sm:items-start sm:gap-4 lg:-mx-3 lg:px-3 lg:py-2 lg:hover:bg-navy-light/50">
                {cardImage ? (
                  <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-md border border-navy-lighter transition-colors group-hover:border-green/40 sm:aspect-[16/10] sm:h-auto sm:w-44">
                    <Image
                      src={cardImage.src}
                      alt={cardImage.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 640px) 176px, 100vw"
                    />
                  </div>
                ) : null}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-medium text-heading transition-colors group-hover:text-green">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-start gap-1.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                      >
                        <span>{project.title}</span>
                        <span
                          aria-hidden
                          className="mt-0.5 inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </Link>
                    </h3>
                    {externalLink ? (
                      <a
                        href={externalLink.href}
                        target="_blank"
                        rel="noreferrer"
                        className="bc-chip shrink-0"
                      >
                        {externalLink.label}
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">
                    {project.summary}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {project.stack.slice(0, 6).map((tech) => (
                      <li key={tech} className="bc-tech-tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
