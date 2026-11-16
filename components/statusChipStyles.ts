export const chipLayoutClass =
  "relative z-20 inline-flex w-fit min-h-8 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium leading-none transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

export const liveChipClass =
  "border-[#1E40AF] bg-[#1E40AF] text-[#FAFAF9] hover:bg-[#1E3A8A] dark:border-[#8AB4F8] dark:bg-[#8AB4F8] dark:text-[#111113] dark:hover:bg-[#A8C7FA]";

export const videoChipClass =
  "border-[#1E40AF] bg-transparent text-[#1E40AF] dark:border-[#8AB4F8] dark:text-[#8AB4F8]";

export const repoChipClass =
  "border-[#52525B] bg-[#52525B] text-[#FFFFFF] dark:border-[#71717A] dark:bg-[#3F3F46]";

export const badgeChipClass =
  "border-[#1E40AF] bg-transparent text-[#1E40AF] dark:border-[#8AB4F8] dark:text-[#8AB4F8]";

export const previewChipClass =
  "border-[#71717A] bg-transparent text-[#18181B] hover:bg-[#F4F4F5] dark:text-[#FAFAF9] dark:hover:bg-[#1C1C1F]";

export const chipContrastPairs: Array<[string, string, number]> = [
  ["#FAFAF9", "#1E40AF", 4.5],
  ["#FAFAF9", "#1E3A8A", 4.5],
  ["#111113", "#8AB4F8", 4.5],
  ["#111113", "#A8C7FA", 4.5],
  ["#1E40AF", "#FAFAF9", 4.5],
  ["#8AB4F8", "#111113", 4.5],
  ["#FFFFFF", "#52525B", 4.5],
  ["#FFFFFF", "#3F3F46", 4.5],
  ["#18181B", "#FAFAF9", 4.5],
  ["#18181B", "#F4F4F5", 4.5],
  ["#FAFAF9", "#111113", 4.5],
  ["#FAFAF9", "#1C1C1F", 4.5],
  ["#71717A", "#FAFAF9", 3],
  ["#71717A", "#111113", 3],
  ["#52525B", "#FAFAF9", 3],
];
