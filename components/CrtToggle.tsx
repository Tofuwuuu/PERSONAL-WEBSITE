"use client";

import { useEffect, useState } from "react";

const KEY = "mark-crt";

/** Icon-only switch for a faint CRT scanline and colour-fringe overlay. Off by default; saved in localStorage. */
export function CrtToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    // The head script already applied the saved class before paint; mirror it here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOn(document.documentElement.classList.contains("crt"));
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    document.documentElement.classList.toggle("crt", next);
    try {
      localStorage.setItem(KEY, next ? "1" : "0");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label="CRT scanlines"
      className={`crt-toggle inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
        on ? "text-green" : "text-slate hover:text-green focus-visible:text-green"
      }`}
    >
      <svg aria-hidden viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="16" height="11" rx="2" />
        <path d="M5 7h10M5 10h10" strokeOpacity="0.6" />
        <path d="M7 17h6" strokeLinecap="round" />
      </svg>
    </button>
  );
}
