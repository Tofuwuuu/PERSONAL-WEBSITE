import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="flex items-center gap-3">
          {profile.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md hover:text-text focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {l.label}
            </a>
          ))}
        </p>
      </div>
    </footer>
  );
}

