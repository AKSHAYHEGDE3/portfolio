import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        border: "#1f1f1f",
        text: {
          primary: "#e5e5e5",
          secondary: "#a3a3a3",
          tertiary: "#737373",
        },
        accent: "#5eead4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "960px",
      },
    },
  },
  plugins: [],
};

export default config;
