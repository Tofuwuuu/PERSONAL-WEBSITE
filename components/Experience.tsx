import { Section } from "@/components/Section";
import { SkillChips } from "@/components/ui/SkillChips";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((job) => (
          <li key={job.id} className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
            <p className="pt-0.5 text-xs font-semibold uppercase tracking-wide text-muted">
              {job.start} – {job.end}
            </p>
            <div>
              <h3 className="font-medium leading-snug text-text">
                {job.role} · <span className="text-muted">{job.company}</span>
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-muted marker:text-line">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <SkillChips skills={job.tech} className="mt-4" />
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
