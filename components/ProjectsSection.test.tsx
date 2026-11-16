import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectsSection } from "@/components/ProjectsSection";
import { featuredProjects, moreProjects } from "@/content/featured";
import { projects } from "@/content/projects";

describe("ProjectsSection", () => {
  it("shows the featured cards in order, the first two as showcases", () => {
    render(<ProjectsSection />);
    const cards = screen.getAllByRole("article");
    expect(cards.map((card) => within(card).getByRole("heading").textContent)).toEqual(
      featuredProjects.map((f) => f.project.title),
    );
    expect(featuredProjects.filter((f) => f.showcase).map((f) => f.project.slug)).toEqual([
      "ai-ops-assistant",
      "procurement-blockchain-system",
    ]);
  });

  it("links each card to its demo and repo, labelling login-off demos as UI preview", () => {
    render(<ProjectsSection />);
    for (const card of screen.getAllByRole("article")) {
      const title = within(card).getByRole("heading").textContent;
      const project = projects.find((p) => p.title === title)!;
      const live = within(card).getByRole("link", { name: /^(Live|UI preview)/ });
      const demo = project.links.find((l) => l.kind === "demo" || l.kind === "preview")!;
      expect(live.getAttribute("href")).toBe(demo.href);
      expect(live.textContent?.startsWith(demo.kind === "preview" ? "UI preview" : "Live")).toBe(true);
      expect(within(card).getByRole("link", { name: /^Code/ }).getAttribute("href")).toBe(
        project.links.find((l) => l.kind === "repo")!.href,
      );
      expect(within(card).getByRole("link", { name: project.title }).getAttribute("href")).toBe(
        `/projects/${project.slug}`,
      );
    }
  });

  it("lists every other project under More projects", () => {
    render(<ProjectsSection />);
    const list = screen.getByRole("list", { name: "More projects" });
    const titles = within(list)
      .getAllByRole("listitem")
      .map((item) => within(item).getAllByRole("link")[0].textContent);
    expect(titles).toEqual(moreProjects.map((p) => p.title));
    expect(titles.length + featuredProjects.length).toBe(projects.length);
  });
});
