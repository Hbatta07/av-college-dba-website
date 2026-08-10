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
          navy: "#172033",
          ivory: "#F7F4ED",
          burgundy: "#7A263A",
          gold: "#B08D57",
          stone: "#E5E0D6",
          dark: "#252525",
          // Backward compatibility mappings
          bg: "#F7F4ED",
          primary: "#172033",
          secondary: "#7A263A",
          accent: "#B08D57",
          textPrimary: "#252525",
          textSecondary: "#4A4D55",
          border: "#E5E0D6",
        },
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "4px",
        lg: "4px",
        none: "0px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(23, 32, 51, 0.04)",
        academic: "0 2px 8px rgba(23, 32, 51, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
