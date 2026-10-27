import { FadeIn } from "@/components/FadeIn";
import type { PropsWithChildren } from "react";

export function Section({
  id,
  title,
  children,
}: PropsWithChildren<{
  id?: string;
  /** Kept for callers; the redesign shows only the label. */
  number?: string;
  title: string;
}>) {
  return (
    <FadeIn>
      <section id={id} className="scroll-mt-24 py-10 md:py-12">
        <h2 className="mb-6 flex items-center gap-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-green">
          <span>{title}</span>
          <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-green/60 to-transparent" />
        </h2>
        {children}
      </section>
    </FadeIn>
  );
}
