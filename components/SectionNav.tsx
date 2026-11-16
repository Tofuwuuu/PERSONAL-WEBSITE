"use client";

import { navItems } from "@/content/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

export function SectionNav({ className = "" }: { className?: string }) {
  const active = useActiveSection();

  return (
    <nav aria-label="Sections" className={className}>
      <ul className="space-y-1">
        {navItems.map(({ href, label, sectionId }) => {
          const isActive = sectionId === active;
          return (
            <li key={sectionId}>
              <a
                href={href}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center gap-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-150 ${
                  isActive ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                <span
                  aria-hidden
                  className={`h-px transition-all duration-150 ${
                    isActive ? "w-16 bg-text" : "w-8 bg-muted"
                  }`}
                />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
