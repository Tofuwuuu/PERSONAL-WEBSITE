import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import profileImage from "@/src/image.png";

const stats = [
  ["Focus", "Frontend + full-stack"],
  ["Level", "Entry-level"],
  ["Proof", "Live projects"],
];

export function Hero() {
  return (
    <section className="surface relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_320px]">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{profile.name}</Badge>
            <Badge>{profile.role}</Badge>
            <Badge>{profile.location}</Badge>
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-text sm:text-5xl md:text-6xl">
            I build clear web interfaces and practical full-stack projects.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            {profile.tagline}
          </p>
          <p className="mt-5 text-sm font-semibold text-accent">
            Seeking entry-level frontend or full-stack roles.
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
          <dl className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map(([label, value]) => (
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
            <Image
              src={profileImage}
              alt={`${profile.name} profile picture`}
              className="relative aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/35"
              priority
            />
            <div className="surface-soft absolute -bottom-5 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 rounded-xl px-4 py-3 text-center text-sm font-medium text-text backdrop-blur">
              Available for entry-level frontend and full-stack roles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
