import { profile } from "@/content/profile";

const SKYLINE = "0,120 0,76 50,76 50,89 110,89 110,27 140,27 140,49 170,49 170,88 240,88 240,68 310,68 310,84 340,84 340,42 400,42 400,65 430,65 430,25 460,25 460,88 520,88 520,80 590,80 590,15 630,15 630,88 700,88 700,21 770,21 770,89 830,89 830,90 870,90 870,78 940,78 940,42 990,42 990,26 1030,26 1030,22 1060,22 1060,24 1110,24 1110,82 1150,82 1150,22 1220,22 1200,120";

/** Decorative neon city skyline above the footer text, in the hero sun palette. */
function Skyline() {
  return (
    <div aria-hidden className="skyline relative left-1/2 mb-8 h-28 w-screen -translate-x-1/2 overflow-hidden">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="skyline-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#dc143c" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#07070d" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={SKYLINE} fill="url(#skyline-fill)" />
        <polyline
          points={SKYLINE}
          fill="none"
          stroke="#2fd3c4"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-10 pb-8 text-center font-mono text-xs text-slate lg:pb-10">
      <Skyline />
      <p>
        Loosely inspired by{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-green"
        >
          brittanychiang.com
        </a>
        . Built with Next.js and Tailwind CSS. Coded by {profile.name.split(" ")[0]}.
      </p>
    </footer>
  );
}
