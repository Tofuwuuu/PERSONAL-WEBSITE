export function PlaceholderScreenshot({
  title,
  compact = false,
}: {
  title: string;
  compact?: boolean;
}) {
  return (
    <div
      className={[
        "relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#0d1219_0%,#111821_45%,#0a1018_100%)]",
        compact ? "min-h-[180px]" : "min-h-full",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.12),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgb(148_163_184/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(148_163_184/0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative mx-6 rounded-2xl border border-dashed border-white/15 bg-black/25 px-5 py-4 text-center backdrop-blur-sm">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent/80">
          Placeholder
        </p>
        <p className="mt-2 text-sm font-semibold text-text">{title}</p>
        <p className="mt-1 text-xs text-muted">Screenshot coming soon</p>
      </div>
    </div>
  );
}
