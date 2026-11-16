import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { SectionNav } from "@/components/SectionNav";
import { navItems } from "@/content/navigation";

function mountSections(tops: Record<string, number>) {
  for (const [id, top] of Object.entries(tops)) {
    const section = document.createElement("section");
    section.id = id;
    section.getBoundingClientRect = () => ({ top }) as DOMRect;
    document.body.append(section);
  }
}

afterEach(() => {
  document.querySelectorAll("section").forEach((section) => section.remove());
});

describe("SectionNav", () => {
  it("links each item to its section anchor in page order", () => {
    render(<SectionNav />);
    const links = screen.getAllByRole("link");
    expect(links.map((link) => link.textContent)).toEqual(["About", "Experience", "Projects", "Contact"]);
    expect(links.map((link) => link.getAttribute("href"))).toEqual(navItems.map((item) => `#${item.sectionId}`));
  });

  it("starts on About and highlights the section that has scrolled past the upper third", async () => {
    mountSections({ about: 0, experience: 900, projects: 1800, contact: 2700 });
    render(<SectionNav />);
    const about = screen.getByRole("link", { name: "About" });
    expect(about.getAttribute("aria-current")).toBe("true");
    const aboutLine = about.querySelector("span[aria-hidden]");
    expect(aboutLine?.className).toContain("w-16");
    expect(aboutLine?.className).toContain("bg-text");
    const experienceLine = screen.getByRole("link", { name: "Experience" }).querySelector("span[aria-hidden]");
    expect(experienceLine?.className).toContain("w-8");
    expect(experienceLine?.className).toContain("bg-muted");
    expect(experienceLine?.className).not.toMatch(/group-hover:w-16/);
    expect(experienceLine?.className).not.toMatch(/group-hover:bg-text/);

    document.querySelectorAll("section").forEach((section) => section.remove());
    mountSections({ about: -1500, experience: -600, projects: 100, contact: 1000 });
    window.dispatchEvent(new Event("scroll"));

    await waitFor(() =>
      expect(screen.getByRole("link", { name: "Projects" }).getAttribute("aria-current")).toBe("true"),
    );
    expect(screen.getByRole("link", { name: "About" }).hasAttribute("aria-current")).toBe(false);
  });
});
