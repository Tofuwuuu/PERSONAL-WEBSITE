"use client";

import { useEffect } from "react";

const MAX = 6;

/** Project cards lean up to 6 degrees toward the cursor. PC fine pointer only, off with reduced motion. */
export function CardTilt() {
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const ok =
      window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ok) return;
    const rows = Array.from(document.querySelectorAll<HTMLElement>(".project-row"));
    const offs: (() => void)[] = [];
    for (const row of rows) {
      let frame = 0;
      const onMove = (e: PointerEvent) => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          const r = row.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          row.classList.add("is-tilting");
          row.style.transform = `perspective(900px) rotateX(${(-y * 2 * MAX).toFixed(2)}deg) rotateY(${(x * 2 * MAX).toFixed(2)}deg)`;
        });
      };
      const onLeave = () => {
        cancelAnimationFrame(frame);
        frame = 0;
        row.classList.remove("is-tilting");
        row.style.transform = "";
      };
      row.addEventListener("pointermove", onMove);
      row.addEventListener("pointerleave", onLeave);
      offs.push(() => {
        row.removeEventListener("pointermove", onMove);
        row.removeEventListener("pointerleave", onLeave);
        onLeave();
      });
    }
    return () => offs.forEach((f) => f());
  }, []);
  return null;
}
