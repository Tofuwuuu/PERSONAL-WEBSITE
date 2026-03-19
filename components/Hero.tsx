import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-8 shadow-sm shadow-black/30 md:p-10">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-transparent to-white/5" />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{profile.role}</Badge>
          <Badge>{profile.location}</Badge>
        </div>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-text md:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
          {profile.tagline}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href="/projects">View projects</ButtonLink>
          <ButtonLink href="/resume" variant="secondary">
            Download resume
          </ButtonLink>
          <ButtonLink href="/#contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted">
          {profile.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md underline decoration-white/15 underline-offset-4 hover:text-text hover:decoration-white/30 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

