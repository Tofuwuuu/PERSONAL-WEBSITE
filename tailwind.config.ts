import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        "navy-light": "#112240",
        "navy-lighter": "#233554",
        slate: "#a8b2d1",
        "slate-light": "#c5cee6",
        heading: "#ccd6f1",
        green: "#64ffda",
        bg: "#0a192f",
        card: "#112240",
        panel: "#233554",
        text: "#ccd6f1",
        muted: "#a8b2d1",
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
