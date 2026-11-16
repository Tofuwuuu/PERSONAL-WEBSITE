"use client";

import { useEffect, useState } from "react";
import { navItems, type SectionId } from "@/content/navigation";

const sectionIds = navItems.map((item) => item.sectionId);

export function sectionAtScroll(): SectionId {
  const atBottom = window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if (atBottom) return sectionIds[sectionIds.length - 1];

  // A section becomes active once its top passes the upper third of the viewport.
  const line = window.innerHeight / 3;
  let current = sectionIds[0];
  for (const id of sectionIds) {
    const top = document.getElementById(id)?.getBoundingClientRect().top;
    if (top !== undefined && top <= line) current = id;
  }
  return current;
}

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>(sectionIds[0]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActive(sectionAtScroll()));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return active;
}
