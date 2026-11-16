"use client";

import { useRef, useState, type MouseEvent } from "react";

/** Email link that copies to the clipboard when it can; plain mailto otherwise. */
export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState("");
  const timer = useRef<number>(0);

  const onClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (!navigator.clipboard?.writeText) return;
    event.preventDefault();
    let ok = true;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      ok = false;
    }
    setCopied(ok ? "Copied" : `Couldn't copy. Email is ${email}`);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(""), ok ? 1400 : 5000);
  };

  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      <a href={`mailto:${email}`} onClick={onClick} className={className}>
        {email}
      </a>
      <span role="status" className="text-xs text-muted">
        {copied}
      </span>
    </span>
  );
}
