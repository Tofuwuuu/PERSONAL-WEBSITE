import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-8 border-y border-white/10 py-8 text-muted md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent/80">
            Builder mindset
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text">
            Practical interfaces backed by dependable systems.
          </h3>
        </div>
        <div className="space-y-4 text-sm leading-relaxed md:text-base">
          <p className="text-pretty">
            I&apos;m Mark Roderick I. Salise, a developer based in the Philippines. I
            enjoy shipping complete projects end-to-end, from small, fast static
            sites to more complex workflows that need clear UX and dependable
            behavior under the hood.
          </p>
          <p className="text-pretty">
            My work spans polished vanilla JavaScript frontends deployed on
            Render and systems-style projects on GitHub, including document
            verification with Hyperledger, API gateway patterns, and distributed
            job queues. I care about clear structure, practical error handling,
            accessibility where it matters, and repos that are easy for others
            to run and deploy.
          </p>
        </div>
      </div>
    </Section>
  );
}
