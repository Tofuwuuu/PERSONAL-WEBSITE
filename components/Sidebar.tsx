"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { navItems } from "@/content/navigation";
import { profile } from "@/content/profile";
import { useActiveSection } from "@/hooks/useActiveSection";

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
} as const;

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [menuPathname, setMenuPathname] = useState(pathname);
  const [activeSection, setActiveSection] = useActiveSection();
  const isHome = pathname === "/";
  // The header name hides while the intro (which shows the full name) is on screen.
  const [introInView, setIntroInView] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const intro = document.getElementById("intro");
    if (!intro || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setIntroInView(Boolean(entry?.isIntersecting)),
      // The sticky header covers the top 64px, so the intro counts as gone once it slides under it.
      { rootMargin: "-64px 0px 0px 0px" },
    );
    observer.observe(intro);
    return () => {
      observer.disconnect();
      setIntroInView(false);
    };
  }, [isHome]);
  const hideHeaderName = isHome && introInView;

  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = (
    <>
      {navItems.map((item) => {
        const isActive = isHome && activeSection === item.sectionId;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={`top-nav-link ${isActive ? "text-heading" : ""}`}
              onClick={() => {
                setActiveSection(item.sectionId);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
      <li>
        <a href={`mailto:${profile.email}`} className="top-nav-link">
          Contact
        </a>
      </li>
    </>
  );

  const social = (
    <ul className="mt-8 flex items-center gap-5" aria-label="Social links">
      {profile.links.map((link) => {
        const Icon = socialIcons[link.label as keyof typeof socialIcons];

        return (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate transition-colors hover:text-green"
              aria-label={link.label}
            >
              {Icon ? <Icon className="h-5 w-5" /> : link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <header className="sticky top-0 z-40 bg-navy/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[72rem] items-center justify-between px-6 sm:px-10 lg:h-20">
          <Link
            href="/"
            aria-hidden={hideHeaderName || undefined}
            tabIndex={hideHeaderName ? -1 : undefined}
            data-testid="header-name"
            className={`text-sm font-bold tracking-tight text-heading transition-opacity duration-200 motion-reduce:transition-none ${
              hideHeaderName ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            {profile.name.split(" ")[0]}
          </Link>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">{links}</ul>
          </nav>
          <button
            type="button"
            className="neon-btn rounded border border-green/40 px-3 py-1.5 font-mono text-xs text-green transition hover:bg-green/10 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-30 bg-navy px-6 pb-8 pt-24 transition-opacity duration-300 motion-reduce:transition-none lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile">
          <ul className="space-y-4 text-2xl">{links}</ul>
        </nav>
        {social}
      </div>
    </>
  );
}
