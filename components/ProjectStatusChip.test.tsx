import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { ProjectStatusChip } from "@/components/ProjectStatusChip";
import {
  chipContrastPairs,
  chipLayoutClass,
  liveChipClass,
  repoChipClass,
  videoChipClass,
} from "@/components/statusChipStyles";
import { getProjectStatus } from "@/content/projectStatus";
import { projects } from "@/content/projects";
import type { Project, ProjectLink } from "@/content/types";

function contrast(foreground: string, background: string) {
  const luminance = (hex: string) => {
    const channels = [0, 1, 2].map((index) => {
      const value = Number.parseInt(hex.slice(1 + index * 2, 3 + index * 2), 16) / 255;
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  };

  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

function makeProject(links: ProjectLink[], overrides: Partial<Project> = {}): Project {
  return {
    slug: "example",
    title: "Example",
    category: "Web Development",
    year: "2026",
    summary: "Example summary.",
    stack: [],
    highlights: [],
    links,
    ...overrides,
  };
}

afterEach(() => {
  cleanup();
});

describe("getProjectStatus", () => {
  it("uses a working demo as Live", () => {
    const status = getProjectStatus(
      makeProject([
        { kind: "demo", label: "Live Site", href: "https://example.com/demo" },
        { kind: "repo", label: "Repo", href: "https://github.com/example/example" },
      ]),
    );

    expect(status).toEqual({ kind: "live", href: "https://example.com/demo" });
  });

  it("uses a video link when the project has no demo", () => {
    const status = getProjectStatus(
      makeProject([
        {
          kind: "video",
          label: "Walkthrough",
          href: "https://example.com/walkthrough.mp4",
        },
        { kind: "repo", label: "Repo", href: "https://github.com/example/example" },
      ]),
    );

    expect(status).toEqual({
      kind: "video",
      href: "https://example.com/walkthrough.mp4",
    });
  });

  it("prefers Live when a project also has a video", () => {
    const status = getProjectStatus(
      makeProject([
        { kind: "demo", label: "Live Site", href: "https://example.com/demo" },
        {
          kind: "video",
          label: "Walkthrough",
          href: "https://example.com/walkthrough.mp4",
        },
      ]),
    );

    expect(status?.kind).toBe("live");
  });

  it("falls back to Repo only", () => {
    const status = getProjectStatus(
      makeProject([
        { kind: "repo", label: "Repo", href: "https://github.com/example/example" },
      ]),
    );

    expect(status).toEqual({
      kind: "repo",
      href: "https://github.com/example/example",
    });
  });
});

describe("project data", () => {
  it("marks Gym Tracker live at the gamma demo and keeps every other status honest", () => {
    const gym = projects.find((project) => project.slug === "gym-app-tracker");
    expect(gym).toBeTruthy();
    expect(getProjectStatus(gym!)).toEqual({
      kind: "live",
      href: "https://gym-app-tracker-gamma.vercel.app",
    });
    expect(gym!.summary).toBe(
      "A workout logger modeled on Strong and Hevy. Log sets, save routines, and look back at your history. Try it with the demo account. Data resets every night.",
    );
    expect(gym!.highlights[0]).toBe(
      "Live on Vercel with a Neon Postgres database. Sign in with the demo account on the sign-in page.",
    );
    expect(gym!.highlights.slice(1).join(" ")).not.toContain(
      "Try it with the demo account. Data resets every night.",
    );
    expect(gym!.summary.toLowerCase()).not.toContain("no live demo");
    expect(gym!.summary).not.toContain("not on a public URL");
    expect(gym!.highlights.join(" ").toLowerCase()).not.toContain("no live demo");

    for (const project of projects) {
      for (const link of project.links) {
        expect(link.href.includes("://gym-app-tracker.vercel.app")).toBe(false);
        expect(link.kind).not.toBe("video");
      }

      const status = getProjectStatus(project);
      const hasDemo = project.links.some((link) => link.kind === "demo");
      expect(status?.kind).toBe(hasDemo ? "live" : "repo");
    }
  });
});

describe("SmartDoc Analyzer", () => {
  it("is live at the browser demo and never links the old hosts", () => {
    const bannedHosts = [
      "smart-doc-analyzer-murex.vercel.app",
      "smart-doc-analyzer-nine.vercel.app",
    ];
    const smartDoc = projects.find((project) => project.slug === "smartdoc-analyzer");

    expect(smartDoc).toBeTruthy();
    expect(getProjectStatus(smartDoc!)).toEqual({
      kind: "live",
      href: "https://smartdoc-analyzer.vercel.app",
    });
    expect(smartDoc!.links.find((link) => link.kind === "demo")).toEqual({
      kind: "demo",
      label: "Live Site",
      href: "https://smartdoc-analyzer.vercel.app",
    });
    expect(smartDoc!.summary).toBe(
      "Upload a PDF or image and get the text, names, keywords, and contract risk flags back. It all runs in your browser, and your file stays on your device.",
    );
    expect(smartDoc!.stack).toEqual([
      "React",
      "TypeScript",
      "pdf.js",
      "Tesseract.js",
      "FastAPI",
    ]);
    expect(smartDoc!.highlights[0]).toBe(
      "Live on Vercel. Try the sample document, or upload your own PDF or image.",
    );
    expect(smartDoc!.highlights.join(" ").toLowerCase()).not.toContain("no public demo");
    expect(smartDoc!.highlights.join(" ").toLowerCase()).not.toContain("repo only");
    expect(`${smartDoc!.summary} ${smartDoc!.highlights.join(" ")}`).not.toMatch(/[—–]/);

    for (const project of projects) {
      for (const link of project.links) {
        for (const host of bannedHosts) {
          expect(link.href.includes(host)).toBe(false);
        }
      }
    }
  });
});

describe("status chip contrast", () => {
  it("meets WCAG AA for text and non-text pairs used by the chips", () => {
    const classNames = [chipLayoutClass, liveChipClass, videoChipClass, repoChipClass].join(" ");
    const pageSurfaces = new Set(["#0a192f", "#112240"]);

    for (const [foreground, background, minimum] of chipContrastPairs) {
      expect(
        classNames.includes(foreground) || pageSurfaces.has(foreground),
        foreground,
      ).toBe(true);
      expect(
        classNames.includes(background) || pageSurfaces.has(background),
        background,
      ).toBe(true);
      expect(contrast(foreground, background)).toBeGreaterThanOrEqual(minimum);
    }
  });
});

describe("ProjectStatusChip video dialog", () => {
  const videoProject = makeProject([
    {
      kind: "video",
      label: "Walkthrough",
      href: "https://example.com/walkthrough.mp4",
    },
    { kind: "repo", label: "Repo", href: "https://github.com/example/example" },
  ]);

  it("opens an accessible dialog with a controllable video and traps focus", async () => {
    const user = userEvent.setup();
    render(<ProjectStatusChip project={videoProject} />);

    const trigger = screen.getByRole("button", { name: "Video" });
    expect(trigger.getAttribute("aria-haspopup")).toBe("dialog");
    await user.click(trigger);

    const dialog = screen.getByRole("dialog", { name: "Video walkthrough" });
    expect(dialog.getAttribute("aria-modal")).toBe("true");

    const video = dialog.querySelector("video");
    expect(video).toBeTruthy();
    expect(video?.getAttribute("src")).toBe("https://example.com/walkthrough.mp4");
    expect(video?.hasAttribute("controls")).toBe(true);

    const close = screen.getByRole("button", { name: "Close" });
    expect(document.activeElement).toBe(close);

    await user.tab();
    expect(document.activeElement).toBe(video);

    await user.tab();
    expect(document.activeElement).toBe(close);

    close.focus();
    await user.tab({ shift: true });
    expect(document.activeElement).toBe(video);

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(document.activeElement).toBe(trigger);
  });
});
