"use client";

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import { profile } from "@/content/profile";

type Line = { id: number; content: ReactNode };

/** Hidden terminal: press ~ (outside text fields) to open. Esc closes. */
export function HiddenTerminal() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [lines, setLines] = useState<Line[]>([]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);
  const idRef = useRef(0);

  const push = (...items: ReactNode[]) =>
    setLines((list) => [...list, ...items.map((content) => ({ id: idRef.current++, content }))]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) return;
        returnRef.current = document.activeElement as HTMLElement | null;
        setOpen(true);
        return;
      }
      if (event.key !== "~" || open) return;
      const t = event.target as HTMLElement | null;
      if (t && (t.closest("input, textarea, select") || t.isContentEditable)) return;
      event.preventDefault();
      returnRef.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      if (lines.length === 0) push("Type help to see what I can do. Esc closes this.");
    } else {
      returnRef.current?.focus?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => setOpen(false);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    push(<span><span className="text-magenta">&gt;</span> {raw}</span>);
    if (!cmd) return;
    if (cmd === "clear") return setLines([]);
    if (cmd === "help") return push(<span className="whitespace-pre">projects  contact  rain  clear</span>);
    if (cmd === "projects") {
      push("Jumping to projects.");
      window.setTimeout(() => {
        close();
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 450);
      return;
    }
    if (cmd === "contact") {
      push(profile.email);
      const fail = () => push(`Couldn't copy. Email is ${profile.email}`);
      if (!navigator.clipboard?.writeText) return fail();
      navigator.clipboard.writeText(profile.email).then(() => push("Copied to clipboard."), fail);
      return;
    }
    if (cmd === "rain") {
      const on = document.documentElement.classList.toggle("night-rain");
      return push(on ? "Rain on." : "Rain off.");
    }
    push(`Command not found: ${raw.trim()}. Type help.`);
  };

  const onDialogKey = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      close();
      return;
    }
    if (event.key === "~") event.nativeEvent.stopImmediatePropagation();
    if (event.key !== "Tab") return;
    const nodes = dialogRef.current?.querySelectorAll<HTMLElement>("a[href], button, input");
    if (!nodes || nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!open) return null;

  return (
    <div className="hidden-term-backdrop" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Terminal"
        className="hidden-term terminal-panel"
        onKeyDown={onDialogKey}
      >
        <div className="terminal-bar">
          <span className="terminal-dot bg-magenta" />
          <span className="terminal-dot bg-yellow" />
          <span className="terminal-dot bg-green" />
          <span className="ml-2 font-mono text-xs text-slate">mark@site:~</span>
          <button type="button" onClick={close} className="ml-auto font-mono text-xs text-slate hover:text-green focus-visible:text-green" aria-label="Close terminal">
            esc
          </button>
        </div>
        <div className="hidden-term-body font-mono text-sm" aria-live="polite">
          {lines.map((line) => (
            <div key={line.id}>{line.content}</div>
          ))}
          <form
            className="mt-1 flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              run(value);
              setValue("");
            }}
          >
            <label htmlFor="hidden-term-input" className="text-green">
              &gt;
            </label>
            <input
              id="hidden-term-input"
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              className="flex-1 bg-transparent text-heading outline-none"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
