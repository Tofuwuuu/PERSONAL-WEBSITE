import type { Config } from "tailwindcss";

const themed = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: themed("bg"),
        surface: themed("surface"),
        text: themed("text"),
        muted: themed("muted"),
        line: themed("line"),
        accent: themed("accent"),
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        page: "1100px",
      },
    },
  },
  plugins: [],
} satisfies Config;
