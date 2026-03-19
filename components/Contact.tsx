import { Section } from "@/components/Section";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/Button";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-white/10 bg-card p-6 md:p-8">
        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted md:text-base">
          Want to collaborate or have an opportunity in mind? Send me a message
          and I’ll get back to you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${profile.email}`}>Email me</ButtonLink>
          <ButtonLink href="/resume" variant="secondary">
            Resume
          </ButtonLink>
          {profile.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-text ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

