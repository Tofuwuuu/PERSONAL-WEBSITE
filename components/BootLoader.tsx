"use client";

import { useEffect, useState } from "react";

const DURATION = 800; // count 0 to 100; total loader time stays under 900ms
const SWEEP = 420;

/** Light-speed streaks for the CRT turn-on: fixed angles so render is deterministic. */
const STREAKS = Array.from({ length: 36 }, (_, i) => ({
  angle: i * 10 + ((i * 37) % 7),
  delay: (i * 53) % 90,
  len: 90 + ((i * 71) % 140),
  white: i % 3 === 0,
}));

/**
 * First-visit-per-session boot screen and CRT turn-on sweep.
 * The inline script in layout sets html.boot only when JS runs, motion is allowed,
 * we are on the home page and this session has not booted yet. Without that class nothing renders.
 */
export function BootLoader() {
  const [phase, setPhase] = useState<"off" | "count" | "sweep">("off");
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("boot")) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhase("count");

    let frame = 0;
    let ended = false;
    const start = performance.now();
    const timers: number[] = [];

    const finish = () => {
      if (ended) return;
      ended = true;
      cancelAnimationFrame(frame);
      setPct(100);
      try {
        sessionStorage.setItem("mark-booted", "1");
      } catch {}
      setPhase("sweep");
      root.classList.add("boot-intro");
      root.classList.remove("boot");
      window.dispatchEvent(new Event("mark:booted"));
      timers.push(window.setTimeout(() => setPhase("off"), SWEEP));
      timers.push(window.setTimeout(() => root.classList.remove("boot-intro"), 1600));
    };

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      setPct(Math.round(p * 100));
      if (p < 1) frame = requestAnimationFrame(tick);
      else finish();
    };
    frame = requestAnimationFrame(tick);

    window.addEventListener("keydown", finish, { once: true });
    window.addEventListener("pointerdown", finish, { once: true });
    return () => {
      cancelAnimationFrame(frame);
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
    };
  }, []);

  if (phase === "off") return null;

  if (phase === "sweep")
    return (
      <>
        <div aria-hidden className="crt-sweep" />
        <div aria-hidden className="warp">
          {STREAKS.map((s, i) => (
            <span key={i} className={s.white ? "is-white" : ""} style={{ transform: `rotate(${s.angle}deg)`, animationDelay: `${s.delay}ms`, width: s.len }} />
          ))}
        </div>
      </>
    );

  return (
    <div className="boot-screen" role="status" aria-live="off">
      <div className="boot-bar" style={{ transform: `scaleX(${pct / 100})` }} />
      <div className="font-mono">
        <p className="text-sm tracking-[0.2em] text-heading sm:text-base">&gt; BOOTING MARK.SYS</p>
        <p className="mt-3 text-3xl font-bold tabular-nums text-green">{String(pct).padStart(3, "0")}%</p>
      </div>
      <p className="boot-hint font-mono text-[12px] text-heading">Press any key to skip</p>
    </div>
  );
}
