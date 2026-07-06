import { Section } from "@/components/Section";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/Button";

const quickNotes = [
  "Open to entry-level roles",
  "Available for projects",
  "Remote-friendly",
];

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="surface relative overflow-hidden rounded-2xl">
        <div className="relative grid gap-8 p-6 md:grid-cols-[1.05fr_0.95fr] md:p-8 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/80">
              Let&apos;s build something useful
            </p>
            <p className="mt-4 max-w-2xl text-pretty text-lg font-semibold leading-snug text-text md:text-2xl">
              Looking for an entry-level developer who can build, learn, and
              follow through?
            </p>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted md:text-base">
              Send me the context and I&apos;ll reply with next steps, availability,
              and any questions that would help move the work forward.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {quickNotes.map((note) => (
                <span
                  key={note}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-bg/45 p-4 sm:p-5">
            <div className="grid gap-3">
              <ButtonLink
                href={`mailto:${profile.email}`}
                className="min-h-12 justify-between px-5"
              >
                <span>Email me</span>
                <span aria-hidden="true">-&gt;</span>
              </ButtonLink>
              <ButtonLink
                href="/resume"
                variant="secondary"
                className="min-h-12 justify-between px-5"
              >
                <span>Resume</span>
                <span aria-hidden="true">-&gt;</span>
              </ButtonLink>
              {profile.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-between rounded-full bg-white/[0.045] px-5 py-2 text-sm font-semibold text-text ring-1 ring-white/10 transition hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <span>{l.label}</span>
                  <span aria-hidden="true">-&gt;</span>
                </a>
              ))}
            </div>
            <p className="mt-5 break-words text-sm leading-relaxed text-muted">
              {profile.email}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
