import { Section } from "@/components/Section";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" number="03." title="Experience">
      <div className="timeline space-y-10">
        {experience.map((job) => (
          <article key={job.id} className="timeline-item relative">
            <span aria-hidden className="timeline-dot" />
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-green/80">
              <span>
                {job.start} to {job.end}
              </span>
            </div>
            <div>
              <h3 className="mt-1 text-lg font-semibold text-heading">
                {job.role} · {job.company}
              </h3>
              <ul className="mt-2 space-y-1.5 text-base leading-relaxed text-slate">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-slate">
                    {bullet}
                  </li>
                ))}
              </ul>
              {job.links && job.links.length > 0 && (
                <div className="mt-3">
                  <p className="font-mono text-xs uppercase tracking-wide text-slate">Sites worked on</p>
                  <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                    {job.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block py-1.5 text-green underline-offset-4 hover:underline focus-visible:underline"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
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
    </Section>
  );
}
