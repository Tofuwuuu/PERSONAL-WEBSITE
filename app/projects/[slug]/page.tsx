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
import smartdocUploadImage from "@/src/SmartDocAnalyzer/1.png";
import smartdocInsightsImage from "@/src/SmartDocAnalyzer/2.png";
import todoListPreviewImage from "@/src/todolist/1.jpg";
import calculatorPreviewImage from "@/src/calculator/calculator.jpg";
import onChainWallet1Image from "@/src/OnChainWallet/1.png";
import onChainWallet2Image from "@/src/OnChainWallet/2.png";
import onChainWallet3Image from "@/src/OnChainWallet/3.png";
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
  const hasWorkingLinks = project.links.some(
    (link) =>
      link.href.length > 0 && link.href !== "#" && !link.href.startsWith("#")
  );
  const showPlaceholderCaseStudy = project.placeholder && !hasCardScreenshot;
  const disableHeaderLinks = showPlaceholderCaseStudy && !hasWorkingLinks;

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
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
        {project.links.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((l) =>
              disableHeaderLinks ? (
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

      {showPlaceholderCaseStudy ? (
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

      {project.slug === "smartdoc-analyzer" ? (
        <PreviewSection
          title="Project Screens"
          description="Upload flow and document insights from SmartDoc Analyzer."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <Image
                src={smartdocUploadImage}
                alt="SmartDoc Analyzer dashboard and upload"
                className="h-auto w-full object-cover object-top"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
                Dashboard & upload
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <Image
                src={smartdocInsightsImage}
                alt="SmartDoc Analyzer document insights and entities"
                className="h-auto w-full object-cover object-top"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
                Document insights
              </figcaption>
            </figure>
          </div>
        </PreviewSection>
      ) : null}

      {project.slug === "todo-list-vanilla-js" ? (
        <PreviewSection
          title="Project Screen"
          description="Main view of the vanilla JavaScript to-do list."
        >
          <figure className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={todoListPreviewImage}
              alt="Vanilla JavaScript to-do list app"
              className="h-auto w-full object-cover object-top"
            />
            <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
              Task list UI
            </figcaption>
          </figure>
        </PreviewSection>
      ) : null}

      {project.slug === "on-chain-wallet-risk-analyzer" ? (
        <PreviewSection
          title="Project Screens"
          description="Wallet analysis, scoring, and report views from the risk analyzer."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 md:col-span-2">
              <Image
                src={onChainWallet1Image}
                alt="On-chain wallet risk analyzer home"
                className="h-auto w-full object-cover object-top"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
                Analyze wallet
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <Image
                src={onChainWallet2Image}
                alt="Wallet risk score breakdown"
                className="h-auto w-full object-cover object-top"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
                Risk score & factors
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <Image
                src={onChainWallet3Image}
                alt="Shareable wallet risk report"
                className="h-auto w-full object-cover object-top"
              />
              <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
                Report view
              </figcaption>
            </figure>
          </div>
        </PreviewSection>
      ) : null}

      {project.slug === "calculator" ? (
        <PreviewSection
          title="Project Screen"
          description="Calculator UI built with HTML, CSS, and JavaScript."
        >
          <figure className="mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={calculatorPreviewImage}
              alt="Calculator web app"
              className="h-auto w-full object-cover object-top"
            />
            <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-muted">
              Calculator
            </figcaption>
          </figure>
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
