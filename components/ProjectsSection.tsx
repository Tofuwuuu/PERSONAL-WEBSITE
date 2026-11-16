import Image from "next/image";
import Link from "next/link";
import { ProjectLinks } from "@/components/ProjectLinks";
import { Section } from "@/components/Section";
import { SkillChips } from "@/components/ui/SkillChips";
import { featuredProjects, moreProjects, type FeaturedProject } from "@/content/featured";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Featured projects">
      <ul className="space-y-6">
        {featuredProjects.map((featured) => (
          <li key={featured.project.slug}>
            <ProjectCard {...featured} />
          </li>
        ))}
      </ul>

      <h3 className="mb-4 mt-16 text-sm font-semibold uppercase tracking-widest text-text">More projects</h3>
      <ul className="divide-y divide-line border-y border-line" aria-label="More projects">
        {moreProjects.map((project) => (
          <li key={project.slug} className="grid gap-1 py-4 sm:grid-cols-[3.5rem_1fr] sm:gap-4">
            <span className="pt-0.5 text-xs tabular-nums text-muted">{project.year}</span>
            <div className="min-w-0">
              <Link
                href={`/projects/${project.slug}`}
                className="font-medium text-text transition-colors duration-150 hover:text-accent"
              >
                {project.title}
              </Link>
              <p className="mb-2 mt-1 text-sm leading-relaxed text-muted">{project.summary}</p>
              <ProjectLinks project={project} />
            </div>
          </li>
        ))}
      </ul>

      <Link
        href="/projects"
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        View the full project archive <span aria-hidden>→</span>
      </Link>
    </Section>
  );
}

function ProjectCard({ project, outcome, showcase, image }: FeaturedProject) {
  return (
    <article
      className={`flex overflow-hidden rounded-lg border border-line bg-surface transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:border-text/25 hover:shadow-md hover:shadow-text/5 ${
        showcase ? "flex-col" : "flex-col sm:flex-row"
      }`}
    >
      {image ? (
        <div
          className={`relative aspect-video shrink-0 bg-text/5 ${
            showcase ? "border-b border-line" : "border-b border-line sm:w-[42%] sm:self-start sm:border-b-0 sm:border-r"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={showcase ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 240px, (min-width: 640px) 42vw, 100vw"}
            className="object-cover object-top"
          />
        </div>
      ) : null}
      <div className={`flex min-w-0 flex-1 flex-col ${showcase ? "p-6" : "p-5"}`}>
        <h3 className={`font-semibold text-text ${showcase ? "text-xl" : "text-base"}`}>
          <Link href={`/projects/${project.slug}`} className="transition-colors duration-150 hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{outcome}</p>
        <SkillChips skills={project.stack} className="mt-4" />
        <div className="mt-auto pt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}
