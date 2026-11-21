import { Section } from "@/components/Section";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-3 md:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="surface-soft rounded-xl p-5 transition hover:border-accent/30 hover:bg-white/[0.045]"
          >
            <h3 className="text-base font-semibold tracking-tight text-text">
              {group.title}
            </h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
