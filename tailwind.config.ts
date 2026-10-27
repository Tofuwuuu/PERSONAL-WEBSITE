import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#07070d",
        "navy-light": "#101019",
        "navy-lighter": "#25252f",
        slate: "#c4c3cf",
        "slate-light": "#f1f0f5",
        heading: "#f1f0f5",
        bright: "#f1f0f5",
        green: "#2fd3c4",
        yellow: "#f5d90a",
        bg: "#07070d",
        card: "#101019",
        panel: "#25252f",
        text: "#f1f0f5",
        muted: "#c4c3cf",
        accent: "#2fd3c4",
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
