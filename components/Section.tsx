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
      <section id={id} className="scroll-mt-24 py-12 md:py-16">
        <h2 className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate">
          {title}
        </h2>
        {children}
      </section>
    </FadeIn>
  );
}
