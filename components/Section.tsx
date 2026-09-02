import { FadeIn } from "@/components/FadeIn";
import type { PropsWithChildren } from "react";

export function Section({
  id,
  number,
  title,
  children,
}: PropsWithChildren<{
  id?: string;
  number?: string;
  title: string;
}>) {
  return (
    <FadeIn>
      <section id={id} className="scroll-mt-24 py-12 first:pt-0 md:py-16">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="whitespace-nowrap font-mono text-2xl font-semibold text-heading md:text-3xl">
            {number ? <span className="text-green">{number} </span> : null}
            <span>{title}</span>
          </h2>
          {number ? (
            <div className="hidden h-px max-w-xs flex-1 bg-navy-lighter sm:block" />
          ) : null}
        </div>
        {children}
      </section>
    </FadeIn>
  );
}
