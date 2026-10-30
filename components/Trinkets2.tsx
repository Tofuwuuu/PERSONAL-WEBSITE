"use client";

import { useEffect } from "react";

let greeted = false;

const LOGO = [
  "  __  __    _    ____  _  __",
  " |  \\/  |  / \\  |  _ \\| |/ /",
  " | |\\/| | / _ \\ | |_) | ' / ",
  " | |  | |/ ___ \\|  _ <| . \\ ",
  " |_|  |_/_/   \\_\\_| \\_\\_|\\_\\",
].join("\n");

/**
 * Second batch of small touches: console greeting, time-of-day hero haze,
 * the one dying-neon flicker on the Projects label, and lit footer windows under the cursor.
 * Motion bits are skipped under prefers-reduced-motion.
 */
export function Trinkets2() {
  useEffect(() => {
    if (!greeted) {
      greeted = true;
      console.log(`%c${LOGO}`, "color:#2fd3c4;font-family:monospace");
      console.log("hey, fellow dev");
    }

    const root = document.documentElement;
    const hour = new Date().getHours();
    const tod = hour >= 17 && hour < 19 ? "tod-sunset" : hour >= 20 || hour < 5 ? "tod-night" : "";
    if (tod) root.classList.add(tod);

    const cleanups: (() => void)[] = [() => root.classList.remove("tod-sunset", "tod-night")];

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => cleanups.forEach((fn) => fn());
    }

    // Projects label flickers for a split second every 20 to 30s.
    const label = document.querySelector("#projects .section-label");
    if (label) {
      let t = 0;
      const schedule = () => {
        t = window.setTimeout(() => {
          label.classList.add("is-flicker");
          window.setTimeout(() => label.classList.remove("is-flicker"), 450);
          schedule();
        }, 20000 + Math.random() * 10000);
      };
      schedule();
      cleanups.push(() => window.clearTimeout(t));
    }

    // Footer skyline: light the window under the cursor (fine pointer only).
    const sky = document.querySelector<HTMLElement>(".skyline");
    if (sky && window.matchMedia("(pointer: fine)").matches) {
      const wins = Array.from(sky.querySelectorAll<SVGRectElement>(".sky-win"));
      let lit: SVGRectElement | null = null;
      const onMove = (e: PointerEvent) => {
        let best: SVGRectElement | null = null;
        let bestD = 18;
        for (const w of wins) {
          const r = w.getBoundingClientRect();
          const d = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
          if (d < bestD) {
            bestD = d;
            best = w;
          }
        }
        if (best === lit) return;
        lit?.classList.remove("is-lit");
        best?.classList.add("is-lit");
        lit = best;
      };
      const onLeave = () => {
        lit?.classList.remove("is-lit");
        lit = null;
      };
      sky.addEventListener("pointermove", onMove);
      sky.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        sky.removeEventListener("pointermove", onMove);
        sky.removeEventListener("pointerleave", onLeave);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
