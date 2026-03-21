import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, getProjectBySlug } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import hyperledgerHomeImage from "@/src/hyperledger/1.jpg";
import hyperledgerAboutImage from "@/src/hyperledger/2.jpg";

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
    <div className="py-10">
      <div className="mb-8">
        <Link
          href="/projects"
          className="rounded-md text-sm text-muted underline decoration-white/10 underline-offset-4 hover:text-text hover:decoration-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          ← Back to projects
        </Link>
      </div>

      <header className="rounded-2xl border border-white/10 bg-card p-8">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-text md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-muted md:text-base">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-text ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </header>

      <section className="mt-8 rounded-2xl border border-white/10 bg-card p-8">
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

      {project.slug === "hyperledger-blockchain-verification" ? (
        <section className="mt-8 rounded-2xl border border-white/10 bg-card p-8">
          <h2 className="text-lg font-semibold tracking-tight text-text">
            Project Screens
          </h2>
          <p className="mt-2 text-sm text-muted">
            Key views from the Hyperledger blockchain verification project.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <Image
                src={hyperledgerHomeImage}
                alt="Hyperledger blockchain verification home page"
                className="h-auto w-full object-cover"
                priority
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
                Home page
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <Image
                src={hyperledgerAboutImage}
                alt="Hyperledger blockchain verification about page"
                className="h-auto w-full object-cover"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
                About
              </figcaption>
            </figure>
          </div>
        </section>
      ) : null}
    </div>
  );
}

