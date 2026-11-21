"use client";

import { useEffect } from "react";

/**
 * Scroll animations for the home page, no library.
 * - Adds `js-motion` to <html> only when motion is allowed, so every hidden start state
 *   lives behind that class and content stays visible without JS or under reduced motion.
 * - Marks [data-reveal] elements `is-in` once when they enter the viewport.
 * - Fills the experience timeline and lights its dots as you scroll (rAF throttled).
 * - Moves [data-parallax] elements slower than the page (transform only).
 */
export function ScrollMotion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || typeof IntersectionObserver === "undefined") return;

    const root = document.documentElement;
    root.classList.add("js-motion");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;

      document.querySelectorAll<HTMLElement>(".timeline").forEach((line) => {
        const rect = line.getBoundingClientRect();
        const reach = vh * 0.6 - rect.top;
        const fill = Math.min(1, Math.max(0, reach / rect.height));
        line.style.setProperty("--fill", fill.toFixed(3));
        line.querySelectorAll<HTMLElement>(".timeline-dot").forEach((dot) => {
          if (dot.getBoundingClientRect().top < vh * 0.6) dot.classList.add("lit");
        });
      });

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const factor = Number(el.dataset.parallax) || 0;
        const host = el.parentElement ?? el;
        const rect = host.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - vh / 2) * factor;
        el.style.setProperty("--py", `${offset.toFixed(1)}px`);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const onMotionChange = () => {
      if (media.matches) root.classList.remove("js-motion");
    };
    media.addEventListener("change", onMotionChange);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      media.removeEventListener("change", onMotionChange);
      root.classList.remove("js-motion");
    };
  }, []);

  return null;
}
