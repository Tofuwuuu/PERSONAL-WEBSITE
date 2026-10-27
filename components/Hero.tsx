import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="intro"
      className="flex min-h-[calc(100svh-4rem)] flex-col justify-center pb-16 pt-10 lg:min-h-[calc(100svh-5rem)]"
    >
      <h1 className="hero-name animate-slide-up whitespace-nowrap text-[clamp(56px,10vw,128px)] font-bold leading-[0.95] tracking-tight text-heading">
        Mark Salise
      </h1>
      <p className="mt-6 text-2xl font-medium text-green">{profile.role}</p>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">{profile.tagline}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex min-h-11 items-center rounded-md bg-yellow px-5 font-mono text-sm font-semibold text-navy transition-colors hover:bg-yellow/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          View projects
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex min-h-11 items-center rounded-md border border-green/70 px-5 font-mono text-sm text-green transition-colors hover:bg-green/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
