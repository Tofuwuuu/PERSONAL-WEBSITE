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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="font-semibold tracking-tight text-text hover:text-white"
        >
          {profile.name}
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1 hover:text-text focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

