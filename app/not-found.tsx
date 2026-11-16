import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="flex min-h-dvh flex-col items-start justify-center py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted">404</p>
      <h1 className="mt-3 text-[40px] font-bold leading-tight tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">This page doesn&apos;t exist, or it moved.</p>
      <Link
        href="/"
        className="mt-8 inline-flex h-10 items-center rounded-md bg-accent px-4 text-sm font-medium text-bg transition-colors duration-150 hover:bg-accent/90"
      >
        Back home
      </Link>
    </main>
  );
}
