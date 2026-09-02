import Link from "next/link";
import { Section } from "@/components/Section";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" number="02." title="Experience">
      <div className="space-y-12">
        {experience.map((job) => (
          <article
            key={job.id}
            className="group relative grid gap-4 pb-1 sm:grid-cols-[8rem_1fr] sm:gap-8"
          >
            <div className="font-mono text-xs uppercase tracking-wide text-slate">
              <span>
                {job.start} — {job.end}
              </span>
            </div>
            <div>
              <h3 className="font-medium text-heading transition-colors group-hover:text-green">
                {job.role} · {job.company}
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-slate">
                    {bullet}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {job.tech.map((tech) => (
                  <li key={tech} className="bc-tech-tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <Link
          href="/resume"
          className="bc-link font-mono text-sm"
        >
          View Full Résumé
        </Link>
      </div>
    </Section>
  );
}
