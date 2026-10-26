import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0b1220",
        "navy-light": "#111a2e",
        "navy-lighter": "#1f2a44",
        slate: "#8b9bb4",
        "slate-light": "#e6edf3",
        heading: "#e6edf3",
        bright: "#e6edf3",
        green: "#64ffda",
        bg: "#0b1220",
        card: "#111a2e",
        panel: "#1f2a44",
        text: "#e6edf3",
        muted: "#8b9bb4",
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
