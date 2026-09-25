export const chipLayoutClass =
  "relative z-20 inline-flex w-fit min-h-8 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1 font-mono text-xs font-medium leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eef3f8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a192f]";

export const liveChipClass =
  "border-[#64ffda] bg-[#64ffda] text-[#0a192f] hover:border-[#8dffe4] hover:bg-[#8dffe4]";

export const videoChipClass =
  "border-[#64ffda] bg-transparent text-[#64ffda] hover:bg-[#10342e]";

export const repoChipClass =
  "border-[#9aa8ba] bg-[#6b7280] text-[#ffffff] hover:border-[#e8eef6]";

export const chipContrastPairs: Array<[string, string, number]> = [
  ["#0a192f", "#64ffda", 4.5],
  ["#0a192f", "#8dffe4", 4.5],
  ["#64ffda", "#0a192f", 4.5],
  ["#64ffda", "#112240", 4.5],
  ["#64ffda", "#10342e", 4.5],
  ["#ffffff", "#6b7280", 4.5],
  ["#eef3f8", "#0a192f", 3],
  ["#64ffda", "#0a192f", 3],
  ["#9aa8ba", "#0a192f", 3],
  ["#6b7280", "#0a192f", 3],
  ["#6b7280", "#112240", 3],
];
