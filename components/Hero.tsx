import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import profileImage from "@/src/image.png";

export function Hero() {
  return (
    <section className="surface relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
      <div className="absolute right-0 top-0 h-64 w-64 translate-x-16 -translate-y-24 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_320px]">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{profile.name}</Badge>
            <Badge>{profile.role}</Badge>
            <Badge>{profile.location}</Badge>
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl">
            Reliable web apps with clear interfaces and dependable systems.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">View projects</ButtonLink>
            <ButtonLink href="/resume" variant="secondary">
              Download resume
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
          <dl className="mt-9 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["Focus", "Full-stack apps"],
              ["Strength", "UX + APIs"],
              ["Proof", "Fabric, commerce, tools"],
            ].map(([label, value]) => (
              <div key={label} className="surface-soft rounded-xl px-4 py-3">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-text">{value}</dd>
              </div>
            ))}
          </dl>
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
        <div className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/20 via-white/5 to-transparent blur-xl" />
            <Image
              src={profileImage}
              alt={`${profile.name} profile picture`}
              className="relative aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/35"
              priority
            />
            <div className="surface-soft absolute -bottom-5 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-xl px-4 py-3 text-center text-sm font-medium text-text backdrop-blur">
              Available for frontend and full-stack work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
