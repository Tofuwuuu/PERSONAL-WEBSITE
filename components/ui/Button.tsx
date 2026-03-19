import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium ring-1 ring-white/10 transition focus:outline-none focus:ring-2 focus:ring-accent";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-sm shadow-accent/20 hover:brightness-110 active:brightness-95",
  secondary: "bg-card text-text hover:bg-white/5",
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

export function Button({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: ButtonVariant }) {
  return (
    <button
      className={[base, variants[variant], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}

