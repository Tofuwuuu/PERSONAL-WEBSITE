import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        "navy-light": "#112240",
        "navy-lighter": "#233554",
        slate: "#d5dce6",
        "slate-light": "#e4ebf3",
        heading: "#eef3f8",
        bright: "#f8fafc",
        green: "#64ffda",
        bg: "#0a192f",
        card: "#112240",
        panel: "#233554",
        text: "#eef3f8",
        muted: "#d5dce6",
        accent: "#64ffda",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "52rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
