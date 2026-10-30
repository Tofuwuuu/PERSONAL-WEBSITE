"use client";

import { useRef, useState, type MouseEvent } from "react";

/** Email link that copies to the clipboard when it can; plain mailto otherwise. */
export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>(0);

  const onClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (!navigator.clipboard?.writeText) return;
    event.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      window.location.href = `mailto:${email}`;
      return;
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <span className="relative inline-flex items-center gap-3">
      <a href={`mailto:${email}`} onClick={onClick} className={className}>
        {email}
      </a>
      <span role="status" className={`copied-flash font-mono text-xs uppercase tracking-[0.2em] text-yellow ${copied ? "is-on" : ""}`}>
        {copied ? "COPIED" : ""}
      </span>
    </span>
  );
}
