import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="rounded-2xl border border-white/10 bg-card p-6 text-muted md:p-8">
        <p className="text-pretty leading-relaxed">
          Write a short intro that connects your strengths to the kind of work
          you want. Keep it skimmable: what you build, what you care about, and
          how you work with people.
        </p>
        <p className="mt-4 text-pretty leading-relaxed">
          You can also mention a few focus areas: performance, design systems,
          accessibility, backend reliability, or shipping end-to-end features.
        </p>
      </div>
    </Section>
  );
}

