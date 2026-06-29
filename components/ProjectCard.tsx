import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import type { Project } from "@/content/types";
import { Badge } from "@/components/ui/Badge";
import hyperledgerImage from "@/src/hyperledger/1.png";
import todoListImage from "@/src/todolist/a62c4d0b-1bc1-4d6c-a125-c106b53c1a55.jpg";
import calculatorImage from "@/src/calculator/calculator.jpg";
import ecommerceImage from "@/src/Ecommerce/1.jpg";

const projectImages: Record<string, { src: StaticImageData; alt: string }> = {
  "fashion-ecommerce-platform": {
    src: ecommerceImage,
    alt: "Fashion e-commerce storefront preview",
  },
  "hyperledger-blockchain-verification": {
    src: hyperledgerImage,
    alt: "Hyperledger blockchain verification preview",
  },
  "vanilla-js-todo-list-app": {
    src: todoListImage,
    alt: "To-Do List App preview",
  },
  "vanilla-js-calculator": {
    src: calculatorImage,
    alt: "Calculator preview",
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const image = projectImages[project.slug];
  const isFeatured = project.featured;
  const proofLabels = [
    isFeatured ? "Featured" : null,
    ...project.links.map((link) => {
      if (link.kind === "demo") return "Live demo";
      if (link.kind === "repo") return "Repo";
      return "Case study";
    }),
    project.links.length ? null : "Case study",
  ].filter(Boolean) as string[];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group surface-soft relative overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-accent/35 hover:bg-white/[0.045] focus:outline-none focus:ring-2 focus:ring-accent ${
        isFeatured
          ? "grid min-h-[360px] md:col-span-2 md:grid-cols-[1.08fr_0.92fr]"
          : "flex min-h-[300px] flex-col"
      }`}
    >
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />

      {image ? (
        <div
          className={`relative overflow-hidden bg-black/30 ${
            isFeatured
              ? "min-h-[220px] border-b border-white/10 md:min-h-full md:border-b-0 md:border-r"
              : "aspect-[16/7] border-b border-white/10"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={
              isFeatured
                ? "(min-width: 768px) 58vw, 100vw"
                : "(min-width: 768px) 50vw, 100vw"
            }
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            priority={isFeatured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/35 via-transparent to-transparent" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
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
          <h3 className="max-w-[28rem] text-lg font-semibold tracking-tight text-text md:text-xl">
            {project.title}
          </h3>
          <span className="mt-1 shrink-0 text-sm font-medium text-muted transition group-hover:translate-x-1 group-hover:text-accent">
            View
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.stack.slice(0, isFeatured ? 6 : 4).map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <span className="mt-5 inline-flex text-sm font-semibold text-accent opacity-80 transition group-hover:opacity-100">
          View case study
        </span>
      </div>
    </Link>
  );
}
