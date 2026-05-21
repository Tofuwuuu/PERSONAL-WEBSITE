import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070a0f",
        card: "#0e141c",
        panel: "#121a24",
        text: "#f3f6fb",
        muted: "#a5b0c1",
        accent: "#5eead4",
        violet: "#7dd3fc",
        amber: "#94a3b8"
      }
    }
  },
  plugins: []
} satisfies Config;
