import { Sparkles } from "@/components/Sparkles";
import { profile } from "@/content/profile";

/** Decorative neon sunset: striped sun, mountain line and a moving grid floor. */
function NeonHorizon() {
  return (
    <div aria-hidden className="neon-horizon pointer-events-none absolute inset-0 overflow-hidden">
      <div className="neon-sun" />
      <svg className="neon-mountains" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <polyline
          points="0,120 90,70 170,95 260,40 350,88 430,60 520,100 610,30 700,85 790,55 880,98 960,45 1050,90 1130,62 1200,100"
          fill="none"
          stroke="#2fd3c4"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="neon-floor">
        <div className="neon-grid" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="intro"
      className="hero-band relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-b border-navy-lighter"
    >
      <NeonHorizon />
      <div className="relative mx-auto max-w-[680px] px-6 pb-72 pt-14 sm:pb-64 lg:pt-20">
        <h1 className="hero-glitch animate-slide-up text-[clamp(44px,8vw,72px)] font-extrabold leading-[1.02] tracking-tight text-heading">
          <Sparkles>
            <span className="hero-name">Mark Salise</span>
          </Sparkles>
        </h1>
        <p className="mt-4 text-xl font-semibold text-green sm:text-2xl">{profile.role}</p>
        <p className="mt-3 max-w-md text-base leading-relaxed text-slate">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Sparkles>
            <a
              href="#projects"
              className="neon-btn spring inline-flex min-h-11 items-center rounded-xl bg-yellow px-5 font-mono text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              View projects
            </a>
          </Sparkles>
          <a
            href={`mailto:${profile.email}`}
            className="neon-btn spring inline-flex min-h-11 items-center rounded-xl border border-green/70 bg-navy/60 px-5 font-mono text-sm text-green hover:bg-green/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
