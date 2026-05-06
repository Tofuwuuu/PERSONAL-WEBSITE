import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080b10",
        card: "#101722",
        panel: "#141b28",
        text: "#f3f6fb",
        muted: "#9da8ba",
        accent: "#6ee7d8",
        violet: "#8b7cff",
        amber: "#f7c56b"
      }
    }
  },
  plugins: []
} satisfies Config;
