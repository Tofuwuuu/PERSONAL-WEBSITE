import type { Project, ProjectLink } from "./types";

function isWorkingHref(href: string) {
  return href.length > 0 && href !== "#" && !href.startsWith("#");
}

function findLink(links: ProjectLink[], kind: ProjectLink["kind"]) {
  return links.find((link) => link.kind === kind && isWorkingHref(link.href));
}

export type ProjectStatus =
  | { kind: "live"; href: string }
  | { kind: "video"; href: string }
  | { kind: "repo"; href: string };

export function getProjectStatus(project: Project): ProjectStatus | null {
  const demo = findLink(project.links, "demo");
  if (demo) return { kind: "live", href: demo.href };

  const video = findLink(project.links, "video");
  if (video) return { kind: "video", href: video.href };

  const repo = findLink(project.links, "repo");
  if (repo) return { kind: "repo", href: repo.href };

  return null;
}
