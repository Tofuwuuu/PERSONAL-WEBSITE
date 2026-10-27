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
      <section id={id} className="scroll-mt-24 py-10 md:py-12">
        <h2 className="mb-6 flex items-center gap-4 font-mono text-sm font-bold uppercase tracking-[0.2em] text-green">
          <span>
            {number ? (
              <span aria-hidden className="mr-2 text-magenta/80">
                {number.replace(".", "")} /
              </span>
            ) : null}
            {title}
          </span>
          <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-green/60 to-transparent" />
        </h2>
        {children}
      </section>
    </FadeIn>
  );
}
