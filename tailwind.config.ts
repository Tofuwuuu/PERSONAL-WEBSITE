import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0d12",
        card: "#101521",
        text: "#e6e9f2",
        muted: "#a5adbf",
        accent: "#7c5cff"
      }
    }
  },
  plugins: []
} satisfies Config;

