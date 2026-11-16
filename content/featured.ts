import { getProjectCardImage } from "./projectImages";
import { projects } from "./projects";
import type { Project } from "./types";

type FeaturedEntry = {
  slug: string;
  outcome: string;
  showcase?: boolean;
};

const featured: FeaturedEntry[] = [
  {
    slug: "ai-ops-assistant",
    showcase: true,
    outcome:
      "An agent sorts each support request, pulls context, and drafts a reply. Nothing goes out until a person approves it, and every step is logged.",
  },
  {
    slug: "procurement-blockchain-system",
    showcase: true,
    outcome:
      "A paying client needed one system for purchasing across multiple roles. I built the workflow from purchase request to inventory, with a log of who did what at each step.",
  },
  {
    slug: "hyperledger-blockchain-verification",
    outcome:
      "The university needed alumni credentials that couldn't be quietly altered. I built it on Hyperledger Fabric with React and FastAPI and handed it off as my capstone.",
  },
  {
    slug: "smartdoc-analyzer",
    outcome:
      "Reads text, names, and contract risks from a PDF or scan in the browser. The repo's FastAPI backend caches results by SHA-256 hash, so repeat uploads reuse the cached result.",
  },
];

export type FeaturedProject = {
  project: Project;
  outcome: string;
  showcase: boolean;
  image: ReturnType<typeof getProjectCardImage>;
};

export const featuredProjects: FeaturedProject[] = featured.map(({ slug, outcome, showcase = false }) => {
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Error(`Featured project "${slug}" is not in projects.ts`);
  return { project, outcome, showcase, image: getProjectCardImage(slug) };
});

const featuredSlugs = new Set(featured.map((entry) => entry.slug));

export const moreProjects = projects
  .filter((p) => !featuredSlugs.has(p.slug))
  .sort((a, b) => Number(b.year) - Number(a.year));

export function projectLinks(project: Project) {
  const live = project.links.find((link) => link.kind === "demo" || link.kind === "preview");
  const code = project.links.find((link) => link.kind === "repo");
  return {
    live: live && { href: live.href, isPreview: live.kind === "preview" },
    code: code?.href,
  };
}
