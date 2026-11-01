import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ProjectStatusChip } from "@/components/ProjectStatusChip";
import { projects, getProjectBySlug } from "@/content/projects";
import { getProjectStatus } from "@/content/projectStatus";
import { Badge } from "@/components/ui/Badge";
import { HyperledgerCaseStudy } from "@/components/HyperledgerCaseStudy";
import { ProcurementCaseStudy } from "@/components/ProcurementCaseStudy";
import { CollaborativeCaseStudy } from "@/components/CollaborativeCaseStudy";
import { PlaceholderCaseStudy } from "@/components/PlaceholderCaseStudy";
import { caseStudyHeroes, caseStudyScreens } from "@/content/caseStudyScreens";
import { getProjectCardImage } from "@/content/projectImages";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const hasCardScreenshot = Boolean(getProjectCardImage(slug));
  const status = getProjectStatus(project);
  const hasWorkingLinks = project.links.some(
    (link) =>
      link.href.length > 0 && link.href !== "#" && !link.href.startsWith("#")
  );
  const secondaryLinks = project.links.filter((link) => link.href !== status?.href);
  const showPlaceholderCaseStudy = project.placeholder && !hasCardScreenshot;
  const disableHeaderLinks = showPlaceholderCaseStudy && !hasWorkingLinks;

  const hero = caseStudyHeroes[slug] ?? getProjectCardImage(slug);
  const screens = caseStudyScreens[slug] ?? [];
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const panel = (
    <aside className="case-panel surface-soft rounded-3xl p-6">
      {project.links.length ? (
        <div className="flex flex-wrap items-center gap-3">
          {disableHeaderLinks ? (
            project.links.map((l) => (
              <span
                key={l.href + l.label}
                className="inline-flex min-h-10 cursor-not-allowed items-center justify-center rounded-full bg-white/[0.03] px-4 py-2 text-sm font-semibold text-muted ring-1 ring-white/10"
              >
                {l.label} (soon)
              </span>
            ))
          ) : (
            <>
              <ProjectStatusChip project={project} />
              {secondaryLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-text ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {l.label}
                </a>
              ))}
            </>
          )}
        </div>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </aside>
  );

  return (
    <div className="py-8 md:py-12">
      <div className="mb-6">
        <Link
          href="/projects"
          className="rounded-md text-sm text-muted underline decoration-white/10 underline-offset-4 hover:text-text hover:decoration-accent/60 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          &larr; Back to projects
        </Link>
      </div>

      <header className="surface rounded-3xl p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/80">
          Case study
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-text md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-muted md:text-base">
          {project.summary}
        </p>
        {showPlaceholderCaseStudy ? (
          <p className="mt-4 text-sm font-semibold text-accent">
            Placeholder case study — content and links will be updated soon.
          </p>
        ) : null}
      </header>

      {hero ? (
        <a href={hero.src.src} target="_blank" rel="noopener noreferrer" className="case-shot project-frame mt-8 block">
          <span className="relative block aspect-video w-full overflow-hidden">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1104px, 100vw"
              className="object-cover object-top"
            />
          </span>
          <span className="sr-only"> (opens full size)</span>
        </a>
      ) : null}

      <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-10">
        <div className="mb-8 lg:sticky lg:top-28 lg:order-2 lg:mb-0">{panel}</div>

        <div className="min-w-0 lg:order-1">
          {project.highlights.length > 0 ? (
            <section className="surface-soft rounded-3xl p-6 md:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-text">Highlights</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                    <span className="text-pretty leading-relaxed">{renderInlineCode(h)}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {screens.length > 0 ? (
            <section className="mt-8">
              <h2 className="text-lg font-semibold tracking-tight text-text">What it does</h2>
              <ul className="mt-5 grid gap-6 md:grid-cols-2">
                {screens.map((shot) => (
                  <li key={shot.src.src}>
                    <figure>
                      <a href={shot.src.src} target="_blank" rel="noopener noreferrer" className="case-shot project-frame block">
                        <span className="relative block aspect-video w-full overflow-hidden bg-navy">
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            fill
                            sizes="(min-width: 1024px) 400px, 100vw"
                            className="object-cover object-top"
                          />
                        </span>
                        <span className="sr-only"> (opens full size)</span>
                      </a>
                      {shot.caption ? (
                        <figcaption className="mt-3 text-sm leading-relaxed text-muted">{shot.caption}</figcaption>
                      ) : null}
                    </figure>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {showPlaceholderCaseStudy ? <PlaceholderCaseStudy title={project.title} /> : null}
          {project.slug === "hyperledger-blockchain-verification" ? <HyperledgerCaseStudy /> : null}
          {project.slug === "procurement-blockchain-system" ? <ProcurementCaseStudy /> : null}
          {project.slug === "collaborative-realtime-document-editor" ? <CollaborativeCaseStudy /> : null}
        </div>
      </div>

      {next && next.slug !== project.slug ? (
        <div className="mt-12 border-t border-white/10 pt-6">
          <Link
            href={`/projects/${next.slug}`}
            className="link-arrow inline-flex items-center gap-2 font-mono text-sm text-green underline-offset-4 hover:underline focus-visible:underline"
          >
            Next: {next.title}
            <span aria-hidden className="arrow">&rarr;</span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

/** Text in backticks becomes an inline code chip; the backticks themselves are dropped. */
function renderInlineCode(text: string): ReactNode {
  const parts = text.split("`");
  if (parts.length < 3) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <code key={i} className="rounded border border-green/30 bg-green/10 px-1.5 py-0.5 font-mono text-[0.85em] text-green">
        {part}
      </code>
    ) : (
      part
    ),
  );
}
