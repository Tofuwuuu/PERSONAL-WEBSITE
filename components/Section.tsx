import { FadeIn } from "@/components/FadeIn";
import type { PropsWithChildren } from "react";

export function Section({
  id,
  number,
  title,
  children,
}: PropsWithChildren<{
  id?: string;
  /** Decorative prefix such as "01." shown as "01 /" (aria-hidden). */
  number?: string;
  title: string;
}>) {
  return (
    <FadeIn>
      <section id={id} data-reveal className="section-framed relative scroll-mt-24 py-10 md:py-12">
        <span aria-hidden className="section-brackets" />
        <h2 className="mb-8 flex items-end gap-3 font-mono text-sm font-bold uppercase tracking-[0.2em] text-green">
          {number ? (
            <span aria-hidden className="section-number">
              {number.replace(".", "")}
            </span>
          ) : null}
          <span className="section-label pb-1.5">
            {number ? (
              <span aria-hidden className="mr-2 text-magenta/80">
                /
              </span>
            ) : null}
            {title}
          </span>
          <span aria-hidden className="section-divider mb-3 h-px flex-1 bg-gradient-to-r from-green/60 to-transparent" />
        </h2>
        {children}
      </section>
    </FadeIn>
  );
}
