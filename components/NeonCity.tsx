"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative hero scene: neon city in three parallax layers behind the ridge, haze, stars,
 * hover-car light streaks, a grid floor that scrolls toward the viewer, and a cursor glow on the floor.
 * Pointer movement is applied through CSS variables in one rAF; animations pause while the hero is offscreen.
 * Under prefers-reduced-motion nothing moves (handled in CSS, and the pointer handler is not attached).
 */

type Building = { x: number; w: number; h: number; windows: { x: number; y: number; blink: boolean; delay: number }[] };

/** Small seeded PRNG so server and client render the same skyline. */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function makeLayer(seed: number, width: number, minH: number, maxH: number, windowChance: number): Building[] {
  const rand = rng(seed);
  const out: Building[] = [];
  let x = 0;
  while (x < width) {
    const w = 26 + Math.round(rand() * 44);
    const h = minH + Math.round(rand() * (maxH - minH));
    const windows: Building["windows"] = [];
    for (let wy = 10; wy < h - 8; wy += 12) {
      for (let wx = 6; wx < w - 8; wx += 9) {
        if (rand() < windowChance) {
          windows.push({ x: x + wx, y: wy, blink: rand() < 0.18, delay: Math.round(rand() * 6000) });
        }
      }
    }
    out.push({ x, w, h, windows });
    x += w + Math.round(rand() * 6);
  }
  return out;
}

const VIEW_W = 800;
const VIEW_H = 260;
const LAYERS = [
  { key: "far", buildings: makeLayer(11, VIEW_W, 90, 200, 0.12), edge: "#ff2e88", edgeOpacity: 0.35, fill: "#0c0c16", winOpacity: 0.35 },
  { key: "mid", buildings: makeLayer(23, VIEW_W, 60, 170, 0.16), edge: "#2fd3c4", edgeOpacity: 0.45, fill: "#0a0a13", winOpacity: 0.55 },
  { key: "near", buildings: makeLayer(37, VIEW_W, 30, 120, 0.2), edge: "#ff2e88", edgeOpacity: 0.6, fill: "#08080f", winOpacity: 0.75 },
] as const;

const STARS = (() => {
  const rand = rng(5);
  return Array.from({ length: 22 }, () => ({
    left: Math.round(rand() * 1000) / 10,
    top: Math.round(rand() * 450) / 10,
    size: rand() < 0.2 ? 2 : 1,
    delay: Math.round(rand() * 5000),
  }));
})();

const RAIN = (() => {
  const rand = rng(91);
  return Array.from({ length: 60 }, () => ({
    left: Math.round(rand() * 1000) / 10,
    len: 30 + Math.round(rand() * 50),
    dur: 600 + Math.round(rand() * 600),
    delay: Math.round(rand() * 1200),
  }));
})();

function CityLayer({ layer }: { layer: (typeof LAYERS)[number] }) {
  return (
    <svg
      className={`city-layer city-${layer.key}`}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMaxYMax slice"
    >
      {layer.buildings.map((b) => (
        <g key={b.x}>
          <rect
            x={b.x}
            y={VIEW_H - b.h}
            width={b.w}
            height={b.h}
            fill={layer.fill}
            stroke={layer.edge}
            strokeOpacity={layer.edgeOpacity}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          {b.windows.map((w) => (
            <rect
              key={`${w.x}-${w.y}`}
              x={w.x}
              y={VIEW_H - b.h + w.y}
              width="3"
              height="4"
              fill={(w.x + w.y) % 3 === 0 ? "#ff2e88" : "#2fd3c4"}
              opacity={layer.winOpacity}
              className={w.blink ? "city-win-blink" : undefined}
              style={w.blink ? { animationDelay: `${w.delay}ms` } : undefined}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

export function NeonCity() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = ref.current;
    const hero = scene?.parentElement;
    if (!scene || !hero) return;

    // Pause every animation while the hero is offscreen.
    const io = new IntersectionObserver(([entry]) => {
      scene.classList.toggle("is-paused", !entry?.isIntersecting);
    });
    io.observe(hero);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    if (reduce.matches || !fine.matches) {
      return () => io.disconnect();
    }

    let frame = 0;
    let px = 0;
    let py = 0;
    let cx = -9999;
    let cy = -9999;
    const apply = () => {
      frame = 0;
      scene.style.setProperty("--mx", px.toFixed(3));
      scene.style.setProperty("--my", py.toFixed(3));
      scene.style.setProperty("--cx", `${cx}px`);
      scene.style.setProperty("--cy", `${cy}px`);
      // The floor is the bottom 150px of the scene; its mask uses floor coordinates.
      scene.style.setProperty("--fy", `${cy - (scene.clientHeight - 150)}px`);
    };
    const onMove = (event: PointerEvent) => {
      const rect = scene.getBoundingClientRect();
      px = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      py = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      cx = event.clientX - rect.left;
      cy = event.clientY - rect.top;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      cx = -9999;
      cy = -9999;
      if (!frame) frame = requestAnimationFrame(apply);
    };
    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    scene.classList.add("has-pointer");

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="neon-city pointer-events-none absolute inset-0 overflow-hidden">
      <div className="city-haze" />
      <div className="night-rain-layer">
        {RAIN.map((r, i) => (
          <span
            key={i}
            className="rain-drop"
            style={{ left: `${r.left}%`, height: r.len, animationDuration: `${r.dur}ms`, animationDelay: `${r.delay}ms` }}
          />
        ))}
      </div>
      <div className="city-stars">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="city-star"
            style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}ms` }}
          />
        ))}
      </div>
      <div className="city-skyline">
        {LAYERS.map((layer) => (
          <div key={layer.key} className={`city-layer-wrap city-wrap-${layer.key}`}>
            <CityLayer layer={layer} />
          </div>
        ))}
        <span className="city-car car-1" />
        <span className="city-car car-2" />
        <span className="city-car car-3" />
      </div>
      <svg className="neon-mountains" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <polygon
          points="0,120 90,70 170,95 260,40 350,88 430,60 520,100 610,30 700,85 790,55 880,98 960,45 1050,90 1130,62 1200,100 1200,120 0,120"
          fill="#07070d"
        />
        <polyline
          points="0,120 90,70 170,95 260,40 350,88 430,60 520,100 610,30 700,85 790,55 880,98 960,45 1050,90 1130,62 1200,100"
          fill="none"
          stroke="#2fd3c4"
          strokeOpacity="0.6"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="neon-floor">
        <div className="neon-grid" />
      </div>
      <div className="neon-floor neon-floor-glow">
        <div className="neon-grid neon-grid-bright" />
      </div>
    </div>
  );
}
