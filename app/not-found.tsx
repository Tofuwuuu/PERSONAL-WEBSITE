import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16">
      <div className="rounded-2xl border border-white/10 bg-card p-8">
        <h1 className="text-2xl font-semibold tracking-tight text-text">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-muted">
          The page you’re looking for doesn’t exist.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-text ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

