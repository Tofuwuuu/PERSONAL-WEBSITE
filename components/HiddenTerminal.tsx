"use client";

import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

type Line = { id: number; content: ReactNode };

const LEAD = "gym-app-tracker";

function projectHref(slug: string, links: { kind: string; href: string }[]) {
  const live = links.find((l) => l.kind === "demo" || l.kind === "preview");
  return live?.href ?? `/projects/${slug}`;
}

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
      if (lines.length === 0) push(<span className="text-slate">Type help to see commands.</span>);
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
    if (cmd === "help") return push("help, projects, contact, rain, clear. Esc closes.");
    if (cmd === "projects") {
      const featured = projects.filter((p) => p.featured);
      const ordered = [...featured.filter((p) => p.slug === LEAD), ...featured.filter((p) => p.slug !== LEAD)];
      return push(
        ...ordered.map((p) => (
          <a key={p.slug} href={projectHref(p.slug, p.links)} className="text-green underline-offset-4 hover:underline focus-visible:underline">
            {p.title}
          </a>
        )),
      );
    }
    if (cmd === "contact") {
      return push(
        <a href={`mailto:${profile.email}`} className="text-green underline-offset-4 hover:underline focus-visible:underline">{profile.email}</a>,
        ...profile.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-green underline-offset-4 hover:underline focus-visible:underline">{l.label}</a>
        )),
      );
    }
    if (cmd === "rain") {
      const on = document.documentElement.classList.toggle("night-rain");
      return push(on ? "rain on" : "rain off");
    }
    push(<span className="text-slate">command not found: {cmd}</span>);
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
