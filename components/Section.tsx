import type { ReactNode } from "react";
import { FadeIn } from "@/components/FadeIn";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mb-20 scroll-mt-8 md:mb-28 lg:scroll-mt-24">
      <h2 id={`${id}-title`} className="mb-6 text-sm font-semibold uppercase tracking-widest text-text">
        {title}
      </h2>
      <FadeIn>{children}</FadeIn>
    </section>
  );
}
