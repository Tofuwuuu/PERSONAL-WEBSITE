import { Section } from "@/components/Section";
import { profile } from "@/content/profile";

export function About() {
  return (
    <Section id="about" number="01." title="About">
      <div className="terminal-panel">
        <div aria-hidden className="terminal-bar">
          <span className="terminal-dot bg-[#dc143c]" />
          <span className="terminal-dot bg-[#f0a500]" />
          <span className="terminal-dot bg-green" />
          <span className="ml-3 font-mono text-xs text-slate">about</span>
        </div>
        <div className="terminal-body space-y-3 text-base leading-relaxed text-slate-light/90">
          {profile.intro.map((paragraph, index) => (
            <p key={paragraph.slice(0, 32)} className="text-pretty">
              {paragraph}
              {index === profile.intro.length - 1 ? <span aria-hidden className="terminal-cursor" /> : null}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
