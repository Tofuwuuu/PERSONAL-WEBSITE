"use client";

import { useEffect, useRef, useState } from "react";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

/**
 * Small site-wide touches, no library:
 * custom crosshair cursor and click sparks (fine pointer only), scroll progress bar,
 * HUD scroll readout and TOP button (shown after the hero), and the Konami night-rain toggle.
 * Everything here is skipped under prefers-reduced-motion, so the page behaves normally.
 */
export function Trinkets() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [percent, setPercent] = useState(0);
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(true);
    setFinePointer(fine);

    // Scroll progress, HUD readout and TOP visibility, one rAF per scroll burst.
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        barRef.current?.style.setProperty("--progress", p.toFixed(4));
        setPercent(Math.round(p * 100));
        const hero = document.getElementById("intro");
        const heroBottom = hero ? hero.getBoundingClientRect().bottom : 600 - window.scrollY;
        setPastHero(heroBottom <= 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Konami code toggles night rain; Esc turns it off.
    let step = 0;
    const onKey = (event: KeyboardEvent) => {
      const root = document.documentElement;
      if (event.key === "Escape") {
        root.classList.remove("night-rain");
        step = 0;
        return;
      }
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      step = key === KONAMI[step] ? step + 1 : key === KONAMI[0] ? 1 : 0;
      if (step === KONAMI.length) {
        root.classList.toggle("night-rain");
        step = 0;
      }
    };
    window.addEventListener("keydown", onKey);

    // Custom cursor and click sparks on fine pointers only.
    let cursorFrame = 0;
    let cx = -100;
    let cy = -100;
    let overInteractive = false;
    let sparkId = 0;
    const moveCursor = () => {
      cursorFrame = 0;
      const el = cursorRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      el.classList.toggle("is-ring", overInteractive);
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cx = event.clientX;
      cy = event.clientY;
      const target = event.target instanceof Element ? event.target : null;
      overInteractive = Boolean(target?.closest("a, button, [role='button'], summary, label"));
      if (!cursorFrame) cursorFrame = requestAnimationFrame(moveCursor);
    };
    const onDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const id = sparkId++;
      setSparks((list) => [...list.slice(-4), { id, x: event.clientX, y: event.clientY }]);
      window.setTimeout(() => setSparks((list) => list.filter((s) => s.id !== id)), 600);
    };
    if (fine) {
      document.documentElement.classList.add("has-custom-cursor");
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onDown, { passive: true });
    }

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(cursorFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.classList.remove("has-custom-cursor", "night-rain");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={barRef} aria-hidden className="scroll-progress" />
      {finePointer ? (
        <>
          <div ref={cursorRef} aria-hidden className="custom-cursor">
            <span className="custom-cursor-cross" />
            <span className="custom-cursor-ring" />
          </div>
          {sparks.map((s) => (
            <span key={s.id} aria-hidden className="click-spark" style={{ left: s.x, top: s.y }}>
              {Array.from({ length: 8 }, (_, i) => (
                <i key={i} style={{ transform: `rotate(${i * 45}deg)` }} />
              ))}
            </span>
          ))}
          <div aria-hidden className={`hud-readout ${pastHero ? "is-visible" : ""}`}>
            Scroll {String(percent).padStart(3, "0")}%
          </div>
        </>
      ) : null}
      <button
        type="button"
        className={`hud-top ${pastHero ? "is-visible" : ""}`}
        tabIndex={pastHero ? 0 : -1}
        aria-hidden={!pastHero}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Top
      </button>
    </>
  );
}
