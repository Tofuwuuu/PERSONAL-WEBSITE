import type { PropsWithChildren } from "react";

export function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <div className={["w-full", className].filter(Boolean).join(" ")}>{children}</div>;
}

