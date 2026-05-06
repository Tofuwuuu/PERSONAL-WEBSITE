import Link from "next/link";
import { profile } from "@/content/profile";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-text hover:text-white md:text-base"
        >
          {profile.name}
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm text-muted md:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-white/5 hover:text-text focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
