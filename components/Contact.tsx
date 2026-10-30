import { Section } from "@/components/Section";
import { CopyEmail } from "@/components/CopyEmail";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <Section id="contact" number="04." title="Contact">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-base">
        <li>
          <CopyEmail email={profile.email} className="text-green underline-offset-4 hover:underline focus-visible:underline" />
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
