"use client";

import { useEffect, useState, type ReactNode } from "react";

export function Spotlight({ children }: { children: ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);

    const onChange = () => setEnabled(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      className="group/spotlight relative min-h-dvh"
      onMouseMove={
        enabled
          ? (event) => {
              setPosition({ x: event.clientX, y: event.clientY });
            }
          : undefined
      }
    >
      {enabled ? (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(100, 255, 218, 0.07), transparent 80%)`,
          }}
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
