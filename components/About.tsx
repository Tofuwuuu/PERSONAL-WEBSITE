import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="rounded-2xl border border-white/10 bg-card p-6 text-muted md:p-8">
        <p className="text-pretty leading-relaxed">
          I’m Mark Roderick I. Salise, a developer based in the Philippines. I
          enjoy shipping complete projects end-to-end—everything from small,
          fast static sites to more complex workflows that need clear UX and
          dependable behavior under the hood.
        </p>
        <p className="mt-4 text-pretty leading-relaxed">
          My work spans polished vanilla JavaScript frontends (deployed on
          Render) and systems-style projects on GitHub—document verification
          with Hyperledger, API gateway / rate-limiting patterns, and
          distributed job queues. I care about clear structure, practical error
          handling, accessibility where it matters, and repos that are easy for
          others to run and deploy.
        </p>
      </div>
    </Section>
  );
}

