import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        card: "#0b0f14",
        panel: "#111821",
        text: "#f8fafc",
        muted: "#9ca8b7",
        accent: "#22d3ee",
        violet: "#60a5fa",
        amber: "#cbd5e1"
      }
    }
  },
  plugins: []
} satisfies Config;
