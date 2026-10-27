"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Josh Comeau style sparkles: small neon stars pop in around the children while hovered or focused. */
type Sparkle = { id: number; x: number; y: number; size: number; color: string };

const COLORS = ["#ff2e88", "#dc143c", "#ff5fa2"];

function makeSparkle(id: number): Sparkle {
  return {
    id,
    x: Math.round(Math.random() * 100),
    y: Math.round(Math.random() * 100),
    size: 8 + Math.round(Math.random() * 8),
    color: COLORS[id % COLORS.length] ?? "#ff2e88",
  };
}

export function Sparkles({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [active, setActive] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      const id = nextId.current++;
      setSparkles((list) => [...list.slice(-5), makeSparkle(id)]);
    }, 160);
    return () => {
      window.clearInterval(timer);
      setSparkles([]);
    };
  }, [active]);

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      {sparkles.map((s) => (
        <svg
          key={s.id}
          aria-hidden
          className="sparkle pointer-events-none absolute z-10"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, color: s.color }}
          viewBox="0 0 68 68"
        >
          <path
            fill="currentColor"
            d="M26.5 25.5C19 33.4 0 34 0 34s19.1.6 26.5 8.5C34 50.4 34 68 34 68s0-17.6 7.5-25.5C49.1 34.6 68 34 68 34s-18.9-.6-26.5-8.5C34 17.6 34 0 34 0s0 17.6-7.5 25.5z"
          />
        </svg>
      ))}
      <span className="relative z-0">{children}</span>
    </span>
  );
}
