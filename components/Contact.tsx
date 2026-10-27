import { Section } from "@/components/Section";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <Section id="contact" number="04." title="Contact">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-base">
        <li>
          <a href={`mailto:${profile.email}`} className="text-green underline-offset-4 hover:underline focus-visible:underline">
            {profile.email}
          </a>
        </li>
        {profile.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-green underline-offset-4 hover:underline focus-visible:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
