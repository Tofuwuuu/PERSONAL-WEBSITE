import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, getProjectBySlug } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import { HyperledgerCaseStudy } from "@/components/HyperledgerCaseStudy";
import { ProcurementCaseStudy } from "@/components/ProcurementCaseStudy";
import { CollaborativeCaseStudy } from "@/components/CollaborativeCaseStudy";
import { PlaceholderCaseStudy } from "@/components/PlaceholderCaseStudy";
import ecommerceStorefrontImage from "@/src/Ecommerce/1.jpg";
import ecommerceAdminImage from "@/src/Ecommerce/2.jpg";

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
        {project.placeholder ? (
          <p className="mt-4 text-sm font-semibold text-accent">
            Placeholder case study — content and links will be updated soon.
          </p>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
        {project.links.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((l) =>
              project.placeholder ? (
                <span
                  key={l.href + l.label}
                  className="inline-flex min-h-10 cursor-not-allowed items-center justify-center rounded-full bg-white/[0.03] px-4 py-2 text-sm font-semibold text-muted ring-1 ring-white/10"
                >
                  {l.label} (soon)
                </span>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "inline-flex min-h-10 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent",
                    l.kind === "demo"
                      ? "bg-accent/15 text-accent ring-1 ring-accent/45 hover:bg-accent/20"
                      : "bg-white/5 text-text ring-1 ring-white/10 hover:bg-white/10",
                  ].join(" ")}
                >
                  {l.kind === "demo" ? `${l.label} ↗` : l.label}
                </a>
              )
            )}
          </div>
        ) : null}
      </header>

      <section className="surface-soft mt-8 rounded-3xl p-6 md:p-8">
        <h2 className="text-lg font-semibold tracking-tight text-text">
          Highlights
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-muted">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
              <span className="text-pretty leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {project.placeholder ? (
        <PlaceholderCaseStudy title={project.title} />
      ) : null}

      {project.slug === "hyperledger-blockchain-verification" ? (
        <HyperledgerCaseStudy />
      ) : null}

      {project.slug === "procurement-blockchain-system" ? (
        <ProcurementCaseStudy />
      ) : null}

      {project.slug === "collaborative-realtime-document-editor" ? (
        <CollaborativeCaseStudy />
      ) : null}

      {project.slug === "fashion-ecommerce-platform" ? (
        <PreviewSection
          title="Project Screens"
          description="Key views from the fashion e-commerce platform."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <Image
                src={ecommerceStorefrontImage}
                alt="Fashion e-commerce storefront preview"
                className="h-auto w-full object-cover object-top"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
                Storefront
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <Image
                src={ecommerceAdminImage}
                alt="Fashion e-commerce admin dashboard preview"
                className="h-auto w-full object-cover object-top"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
                Admin dashboard
              </figcaption>
            </figure>
          </div>
        </PreviewSection>
      ) : null}
    </div>
  );
}

function PreviewSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="surface-soft mt-8 rounded-3xl p-6 md:p-8">
      <h2 className="text-lg font-semibold tracking-tight text-text">{title}</h2>
      <p className="mt-2 text-sm text-muted">{description}</p>
      <div className="mt-6">{children}</div>
    </section>
  );
}
