import type { PropsWithChildren } from "react";

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-muted ring-1 ring-white/10">
      {children}
    </span>
  );
}
