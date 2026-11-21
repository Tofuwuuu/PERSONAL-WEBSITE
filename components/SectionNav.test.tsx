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
    expect(screen.getByRole("link", { name: "About" }).getAttribute("aria-current")).toBe("true");

    document.querySelectorAll("section").forEach((section) => section.remove());
    mountSections({ about: -1500, experience: -600, projects: 100, contact: 1000 });
    window.dispatchEvent(new Event("scroll"));

    await waitFor(() =>
      expect(screen.getByRole("link", { name: "Projects" }).getAttribute("aria-current")).toBe("true"),
    );
    expect(screen.getByRole("link", { name: "About" }).hasAttribute("aria-current")).toBe(false);
  });
});
