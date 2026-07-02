import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and contact links.",
};

export default function ResumePage() {
  return (
    <div className="py-8 md:py-12">
      <header className="surface relative overflow-hidden rounded-3xl p-6 md:p-8">
        <div className="absolute right-0 top-0 h-44 w-44 translate-x-12 -translate-y-20 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/80">
          Resume
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-text md:text-5xl">
          Resume
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted md:text-base">
          Download a DOCX copy, or reach out directly.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href="/resume.pdf">Download Resume</ButtonLink>
          <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
            Email {profile.name.split(" ")[0] ?? "me"}
          </ButtonLink>
          <Link
            href="/projects"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-text ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            View projects
          </Link>
        </div>

        <p className="mt-5 text-xs text-muted">
          Resume source: <span className="font-medium text-text">src/Mark_Salise_Resume.docx</span>
        </p>
        </div>
      </header>
    </div>
  );
}
