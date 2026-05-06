import { Section } from "@/components/Section";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/Button";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="surface relative overflow-hidden rounded-3xl p-6 md:p-8">
        <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-16 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted md:text-base">
            Want to collaborate or have an opportunity in mind? Send me a
            message and I&apos;ll get back to you.
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
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-text ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
