import { render, screen, within } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import { ProjectsSection } from "@/components/ProjectsSection";

beforeAll(() => {
  // jsdom has no IntersectionObserver; the fade-in only needs a stub.
  globalThis.IntersectionObserver ??= class {
    observe() {}
    disconnect() {}
    unobserve() {}
    takeRecords() { return []; }
  } as unknown as typeof IntersectionObserver;
});

describe("ProjectsSection", () => {
  it("puts the Live / UI preview chip at the end of the stack-tag row", () => {
    render(<ProjectsSection />);
    const rows = screen.getAllByTestId("tag-row");
    expect(rows.length).toBeGreaterThan(0);
    const gym = rows[0];
    const items = within(gym).getAllByRole("listitem");
    expect(within(items[items.length - 1]).getByRole("link", { name: /Live/ })).toBeTruthy();
    const preview = rows.find((r) => within(r).queryByRole("link", { name: /UI preview/ }));
    expect(preview).toBeTruthy();
  });
});
