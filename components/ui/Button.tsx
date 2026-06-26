import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary";

const base =
  "inline-flex min-h-10 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-accent";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg shadow-sm shadow-accent/20 hover:bg-accent/90 active:brightness-95",
  secondary: "bg-white/[0.045] text-text hover:bg-white/[0.08]",
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return (
    <Link
      href={href}
      className={[base, variants[variant], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

