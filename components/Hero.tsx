import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="hero-grid relative -mx-6 mb-6 animate-fade-up px-6 pb-10 pt-8 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:hidden">
      <h1 className="text-4xl font-bold tracking-tight text-bright">
        {profile.name}
      </h1>
      <h2 className="mt-2 text-xl font-medium text-green">{profile.role}</h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate">
        {profile.tagline}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex min-h-11 items-center rounded-md bg-green px-4 font-mono text-sm font-semibold text-navy transition-colors hover:bg-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          View projects
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex min-h-11 items-center rounded-md border border-green/70 px-4 font-mono text-sm text-green transition-colors hover:bg-green/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
