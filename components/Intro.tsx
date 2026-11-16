import { ResumeLink } from "@/components/ResumeLink";
import { SectionNav } from "@/components/SectionNav";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { profile } from "@/content/profile";

export function Intro() {
  return (
    <header className="pb-16 pt-16 md:pt-24 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-[40px] font-bold leading-tight tracking-tight text-text lg:text-5xl">{profile.name}</h1>
        <p className="mt-3 text-lg font-medium text-text">{profile.role}</p>
        <p className="mt-4 max-w-sm leading-relaxed text-muted">{profile.pitch}</p>
        <div className="mt-8 flex gap-3">
          <ResumeLink />
          <ButtonLink href="#contact" variant="secondary">
            Contact
          </ButtonLink>
        </div>
        <SectionNav className="mt-16 hidden lg:block" />
      </div>
      <div className="mt-10 flex items-center gap-6">
        <SocialLinks />
        <ThemeToggle />
      </div>
    </header>
  );
}
