import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/Badge";
import { PlaceholderScreenshot } from "@/components/PlaceholderScreenshot";
import hyperledgerImage from "@/src/hyperledger/1.png";
import procurementImage from "@/src/procurement/Admin dashboard.png";
import ecommerceImage from "@/src/Ecommerce/1.jpg";
import collaborativeImage from "@/src/collaborative Real-Time Document Editor/Main page.png";

const projectImages: Record<string, { src: StaticImageData; alt: string }> = {
  "fashion-ecommerce-platform": {
    src: ecommerceImage,
    alt: "Fashion e-commerce storefront preview",
  },
  "hyperledger-blockchain-verification": {
    src: hyperledgerImage,
    alt: "Hyperledger blockchain verification preview",
  },
  "procurement-blockchain-system": {
    src: procurementImage,
    alt: "Procurement blockchain system admin dashboard preview",
  },
  "collaborative-realtime-document-editor": {
    src: collaborativeImage,
    alt: "Collaborative real-time document editor preview",
  },
};

export function ProjectCard({
  project,
  compact = false,
  equalSize = false,
}: {
  project: Project;
  compact?: boolean;
  equalSize?: boolean;
}) {
  const image = project.placeholder ? null : projectImages[project.slug];
  const isFeaturedLayout = project.featured && !equalSize;
  const proofLabels = [
    project.featured ? "Featured" : null,
    project.placeholder ? "Coming soon" : null,
    ...project.links.map((link) => {
      if (
        link.kind === "demo" &&
        link.href &&
        link.href !== "#" &&
        !link.href.startsWith("#")
      ) {
        return "Live demo";
      }
      if (link.kind === "repo") return "Repo";
      return "Case study";
    }),
    project.links.length ? null : "Case study",
  ].filter(Boolean) as string[];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group surface-soft relative overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.045] focus:outline-none focus:ring-2 focus:ring-accent ${
        isFeaturedLayout
          ? compact
            ? "grid md:col-span-2 md:grid-cols-[1fr_1.05fr] xl:col-span-3 xl:grid-cols-[1.15fr_1fr]"
            : "grid min-h-[360px] md:col-span-2 md:grid-cols-[1.08fr_0.92fr]"
          : compact || equalSize
            ? "flex h-full flex-col"
            : "flex min-h-[300px] flex-col"
      }`}
    >
      {image || project.placeholder ? (
        <div
          className={`relative overflow-hidden bg-black/30 ${
            isFeaturedLayout
              ? compact
                ? "aspect-[16/9] border-b border-white/10 md:aspect-auto md:h-[200px] md:self-center md:border-b-0 md:border-r"
                : "min-h-[220px] border-b border-white/10 md:min-h-full md:border-b-0 md:border-r"
              : compact || equalSize
                ? "aspect-[16/8] border-b border-white/10"
                : "aspect-[16/7] border-b border-white/10"
          }`}
        >
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={
                isFeaturedLayout
                  ? "(min-width: 768px) 58vw, 100vw"
                  : "(min-width: 768px) 50vw, 100vw"
              }
              className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              priority={project.featured}
            />
          ) : (
            <PlaceholderScreenshot title={project.title} />
          )}
          <div
            className={
              equalSize
                ? "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-card/80 to-transparent"
                : "absolute inset-0 bg-gradient-to-t from-bg/35 via-transparent to-transparent"
            }
          />
        </div>
      ) : null}

      <div
        className={`flex flex-1 flex-col ${compact || equalSize ? "p-4 md:p-5" : "p-6"}`}
      >
        <div className={`flex flex-wrap items-center gap-2 ${compact || equalSize ? "mb-2.5" : "mb-4"}`}>
          <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {project.category}
          </span>
          {proofLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3
            className={`max-w-[28rem] font-semibold tracking-tight text-text ${
              compact || equalSize ? "text-base md:text-lg" : "text-lg md:text-xl"
            }`}
          >
            {project.title}
          </h3>
          <span className="mt-1 shrink-0 text-sm font-medium text-muted transition group-hover:translate-x-1 group-hover:text-accent">
            View
          </span>
        </div>

        <p
          className={`text-sm leading-relaxed text-muted ${
            compact || equalSize ? "mt-2 line-clamp-2" : "mt-3"
          }`}
        >
          {project.summary}
        </p>

        <div
          className={`mt-auto flex flex-wrap gap-2 ${compact || equalSize ? "pt-3" : "pt-6"}`}
        >
          {project.stack.slice(0, project.featured ? 6 : 4).map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <span
          className={`inline-flex text-sm font-semibold text-accent opacity-80 transition group-hover:opacity-100 ${
            compact || equalSize ? "mt-3" : "mt-5"
          }`}
        >
          View case study
        </span>
      </div>
    </Link>
  );
}
