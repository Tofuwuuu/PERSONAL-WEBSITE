import { CopyEmail } from "@/components/CopyEmail";
import { ResumeLink } from "@/components/ResumeLink";
import { Section } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-prose leading-relaxed text-muted">
        I&apos;m open to full-time junior software engineer roles, onsite, hybrid, or remote in Metro Manila, and I can
        start right away. Email is the fastest way to reach me.
      </p>
      <p className="mt-6">
        <CopyEmail
          email={profile.email}
          className="text-lg font-medium text-accent underline-offset-4 transition-colors duration-150 hover:underline"
        />
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <ResumeLink />
        <SocialLinks />
      </div>
    </Section>
  );
}
