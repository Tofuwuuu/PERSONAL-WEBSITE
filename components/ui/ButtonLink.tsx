import type { AnchorHTMLAttributes } from "react";

const variants = {
  primary: "bg-accent text-bg hover:bg-accent/90",
  secondary: "border border-line text-text hover:border-text/40",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: keyof typeof variants }) {
  return (
    <a
      className={`inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
