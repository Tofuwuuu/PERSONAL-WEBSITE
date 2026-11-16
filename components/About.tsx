import { Section } from "@/components/Section";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 leading-relaxed text-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
