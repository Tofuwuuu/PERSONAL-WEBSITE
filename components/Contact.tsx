import { Section } from "@/components/Section";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <Section id="contact" number="04." title="Contact">
      <div className="max-w-xl">
        <p className="text-sm leading-relaxed text-slate md:text-base">
          I&apos;m currently open to software engineering opportunities and
          interesting project work. Whether you have a question, an opportunity,
          or just want to say hi — my inbox is always open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block font-mono text-lg text-heading underline decoration-green/40 underline-offset-4 transition hover:text-green hover:decoration-green"
        >
          Say Hello
        </a>
      </div>
    </Section>
  );
}
