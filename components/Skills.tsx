import { Section } from "@/components/Section";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-card p-6"
          >
            <h3 className="text-sm font-semibold tracking-tight text-text">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
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

