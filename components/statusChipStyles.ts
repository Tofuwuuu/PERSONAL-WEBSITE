export const chipLayoutClass =
  "relative z-20 inline-flex w-fit min-h-8 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 font-mono text-xs font-medium leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1f0f5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070d]";

export const liveChipClass =
  "border-[#2fd3c4] bg-[#2fd3c4] text-[#07070d] hover:border-[#5fe0d4] hover:bg-[#5fe0d4]";

export const videoChipClass =
  "border-[#2fd3c4] bg-transparent text-[#2fd3c4] hover:bg-[#0d2e2b]";

export const repoChipClass =
  "border-[#9aa8ba] bg-[#6b7280] text-[#ffffff] hover:border-[#e8eef6]";

export const previewChipClass =
  "border-[#9aa8ba] bg-transparent text-[#f1f0f5] hover:border-[#e8eef6] hover:bg-[#101019]";

export const chipContrastPairs: Array<[string, string, number]> = [
  ["#07070d", "#2fd3c4", 4.5],
  ["#07070d", "#5fe0d4", 4.5],
  ["#2fd3c4", "#07070d", 4.5],
  ["#2fd3c4", "#101019", 4.5],
  ["#2fd3c4", "#0d2e2b", 4.5],
  ["#ffffff", "#6b7280", 4.5],
  ["#f1f0f5", "#07070d", 4.5],
  ["#f1f0f5", "#101019", 4.5],
  ["#f1f0f5", "#07070d", 3],
  ["#2fd3c4", "#07070d", 3],
  ["#9aa8ba", "#07070d", 3],
  ["#6b7280", "#07070d", 3],
  ["#6b7280", "#101019", 3],
];
