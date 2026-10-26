import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section
      id="intro"
      className="relative left-1/2 flex min-h-[calc(100svh-4rem)] w-screen max-w-[72rem] -translate-x-1/2 flex-col justify-center px-6 pb-16 pt-10 sm:px-10 lg:min-h-[calc(100svh-5rem)]"
    >
      <h1 className="hero-name animate-slide-up text-[14vw] font-bold leading-[0.95] tracking-tight text-heading lg:text-[120px]">
        Mark Salise
      </h1>
      <p className="mt-6 text-2xl font-medium text-green">{profile.role}</p>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">{profile.tagline}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex min-h-11 items-center rounded-md bg-green px-5 font-mono text-sm font-semibold text-navy transition-colors hover:bg-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
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
