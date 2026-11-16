import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { ThemeToggle } from "@/components/ThemeToggle";
import { THEME_STORAGE_KEY, themeScript } from "@/lib/theme";

const root = document.documentElement;

afterEach(() => {
  root.className = "";
  localStorage.clear();
});

describe("ThemeToggle", () => {
  it("switches the dark class on and off and remembers the choice", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: "Dark mode" });
    expect(button.getAttribute("aria-pressed")).toBe("false");

    await user.click(button);
    expect(root.classList.contains("dark")).toBe(true);
    expect(button.getAttribute("aria-pressed")).toBe("true");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");

    await user.click(button);
    expect(root.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
  });

  it("applies a saved dark theme before React loads", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "dark");
    new Function(themeScript)();
    expect(root.classList.contains("dark")).toBe(true);
    expect(root.classList.contains("js")).toBe(true);
  });
});
