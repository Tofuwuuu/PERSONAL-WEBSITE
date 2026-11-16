import { ButtonLink } from "@/components/ui/ButtonLink";
import { profile } from "@/content/profile";

export function ResumeLink({ className }: { className?: string }) {
  return (
    <ButtonLink href={profile.resume.href} download={profile.resume.fileName} className={className}>
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M8 2v8m0 0L5 7m3 3 3-3M3 13h10" />
      </svg>
      Resume (PDF)
    </ButtonLink>
  );
}
