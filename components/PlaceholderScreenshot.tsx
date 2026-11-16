export function PlaceholderScreenshot({
  title,
  compact = false,
}: {
  title: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center bg-text/5 ${compact ? "min-h-[180px]" : "min-h-full"}`}
    >
      <div className="mx-6 rounded-xl border border-dashed border-line px-5 py-4 text-center">
        <p className="text-sm font-semibold text-text">{title}</p>
        <p className="mt-1 text-xs text-muted">Screenshot coming soon</p>
      </div>
    </div>
  );
}
