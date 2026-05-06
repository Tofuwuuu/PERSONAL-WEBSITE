import type { PropsWithChildren, ReactNode } from "react";

export function Section({
  id,
  title,
  eyebrow,
  children,
}: PropsWithChildren<{ id?: string; title: string; eyebrow?: ReactNode }>) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6 md:mb-8">
        {eyebrow ? (
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent/80">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-text md:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
