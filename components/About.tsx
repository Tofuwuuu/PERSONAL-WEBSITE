import { Section } from "@/components/Section";

const strengths = [
  "Frontend fundamentals",
  "API integration",
  "Full-stack projects",
  "Deployment practice",
];

const principles = [
  { label: "Plan", value: "Break workflows into clear screens, states, and tasks." },
  { label: "Implement", value: "Build usable interfaces with practical backend behavior." },
  { label: "Improve", value: "Refine projects through feedback, testing, and deployment." },
];

export function About() {
  return (
    <Section id="about" title="About">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
        <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r md:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent/80">
              Builder mindset
            </p>
            <h3 className="mt-4 max-w-md text-2xl font-semibold leading-tight tracking-tight text-text md:text-3xl">
              Practical interfaces backed by dependable systems.
            </h3>
            <div className="mt-7 flex flex-wrap gap-2">
              {strengths.map((strength) => (
                <span
                  key={strength}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted md:text-base">
              <p className="text-pretty">
                I&apos;m Mark Roderick I. Salise, a developer based in the
                Philippines. As an early-career developer, I focus on building
                complete, understandable projects and learning through real
                implementation.
              </p>
              <p className="text-pretty">
                My work includes vanilla JavaScript frontends deployed on
                Render, React and TypeScript interfaces, API-backed dashboards,
                and document verification projects with Hyperledger. I care
                about clear structure, practical error handling, accessibility
                where it matters, and repos that are easy for others to run and
                understand.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {principles.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-bg/45 p-4"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent/75">
                    {item.label}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
