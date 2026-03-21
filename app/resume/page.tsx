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
    <div className="py-10">
      <header className="rounded-2xl border border-white/10 bg-card p-8">
        <h1 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
          Resume
        </h1>
        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted md:text-base">
          Download a PDF copy, or reach out directly.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href="/resume.pdf">Download PDF</ButtonLink>
          <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
            Email {profile.name.split(" ")[0] ?? "me"}
          </ButtonLink>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-text ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            View projects
          </Link>
        </div>

        <p className="mt-5 text-xs text-muted">
          Resume source: <span className="font-medium text-text">src/Mark_Resume.pdf</span>
        </p>
      </header>
    </div>
  );
}

