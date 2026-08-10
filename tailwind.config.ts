import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f8fafc",
          primary: "#1e3a8a",
          secondary: "#0f172a",
          accent: "#2563eb",
          textPrimary: "#0f172a",
          textSecondary: "#475569",
          border: "#e2e8f0",
        },
      },
    },
  },
  plugins: [],
};

export default config;
