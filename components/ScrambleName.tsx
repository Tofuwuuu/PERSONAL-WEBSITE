"use client";

import { useEffect, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=<>/\\01";

/** Scrambles the visible letters once on load (~600ms). The real name stays in the DOM for screen readers and search. */
export function ScrambleName({ text }: { text: string }) {
  const [shown, setShown] = useState(text);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDone(true);
      return;
    }
    const duration = 600;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const settled = Math.floor(progress * text.length);
      setShown(
        text
          .split("")
          .map((ch, i) => (ch === " " || i < settled ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join(""),
      );
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDone(true);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>{shown}</span>
      {done ? <span aria-hidden className="name-cursor" /> : null}
    </>
  );
}
