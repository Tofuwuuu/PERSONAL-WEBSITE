import { Section } from "@/components/Section";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section id="about" number="01." title="About">
      <div className="space-y-4 text-sm leading-relaxed text-slate md:text-base">
        {profile.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
