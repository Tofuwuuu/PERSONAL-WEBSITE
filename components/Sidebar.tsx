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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useActiveSection();
  const isHome = pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const nav = (
    <nav aria-label="Primary">
      <ul className="space-y-1">
        {navItems.map((item) => {
          const isActive = isHome && activeSection === item.sectionId;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`bc-nav-item ${isActive ? "is-active" : ""}`}
                onClick={() => {
                  setActiveSection(item.sectionId);
                  setMenuOpen(false);
                }}
              >
                <span className="bc-nav-line" aria-hidden />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
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
              className="text-slate transition-transform duration-200 hover:-translate-y-1 hover:text-green"
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
      <div className="sticky top-0 z-40 flex items-center justify-between bg-navy/85 px-6 py-4 backdrop-blur-md lg:hidden">
        <Link href="/" className="text-sm font-bold tracking-tight text-bright">
          {profile.name.split(" ")[0]}
        </Link>
        <button
          type="button"
          className="rounded border border-green/40 px-3 py-1.5 font-mono text-xs text-green transition hover:bg-green/10"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-30 bg-navy px-6 pb-8 pt-20 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {nav}
        {social}
      </div>

      <header className="hidden lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-center lg:py-12 lg:pr-8">
        <div>
          <Link href="/" className="block">
            <h1
              className={`text-5xl font-bold tracking-tight text-bright ${
                mounted ? "animate-fade-up" : "opacity-0"
              }`}
            >
              {profile.name}
            </h1>
            <h2
              className={`mt-3 text-lg font-medium text-heading ${
                mounted ? "animate-fade-up animation-delay-100" : "opacity-0"
              }`}
            >
              {profile.role}
            </h2>
            <p
              className={`mt-5 max-w-xs text-sm leading-relaxed text-slate ${
                mounted ? "animate-fade-up animation-delay-200" : "opacity-0"
              }`}
            >
              {profile.tagline}
            </p>
          </Link>
          <div
            className={`mt-12 ${
              mounted ? "animate-fade-up animation-delay-300" : "opacity-0"
            }`}
          >
            {nav}
          </div>
          <div
            className={`mt-10 ${
              mounted ? "animate-fade-up animation-delay-500" : "opacity-0"
            }`}
          >
            {social}
          </div>
        </div>
      </header>
    </>
  );
}
