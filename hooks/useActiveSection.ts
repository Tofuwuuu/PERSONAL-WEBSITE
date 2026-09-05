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
  if (scrollY + viewportHeight >= docHeight - 4) {
    return SECTION_IDS[SECTION_IDS.length - 1] ?? SECTION_IDS[0] ?? "about";
  }

  const referenceLine = viewportHeight * 0.35;
  let current = SECTION_IDS[0] ?? "about";

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
  const [activeSection, setActiveSection] = useState<string>(
    navItems[0]?.sectionId ?? "about",
  );

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
