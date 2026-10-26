"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/content/navigation";

const SECTION_IDS = navItems.map((item) => item.sectionId);

function getSectionFromScroll() {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // If we've hit (or nearly hit) the bottom of the page, force the last
  // section active. Short trailing sections (like Contact) may never cross
  // the reference line below because the page can't scroll far enough.
  if (scrollY > 0 && scrollY + viewportHeight >= docHeight - 4) {
    return SECTION_IDS[SECTION_IDS.length - 1] ?? SECTION_IDS[0] ?? "about";
  }

  // A section counts once its top reaches the sticky top bar (80px tall on PC).
  // Nothing is active while the hero is on screen.
  const referenceLine = 96;
  let current = "";

  for (const id of SECTION_IDS) {
    const section = document.getElementById(id);
    if (!section) continue;

    const top = section.getBoundingClientRect().top;
    if (top <= referenceLine) {
      current = id;
    }
  }

  return current;
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setActiveSection(getSectionFromScroll());
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  return [activeSection, setActiveSection] as const;
}
