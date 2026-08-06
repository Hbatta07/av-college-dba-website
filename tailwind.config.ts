import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      colors: {
        brand: {
          primary: "#1E40AF",
          secondary: "#38BDF8",
          accent: "#EAB308",

          background: "#FAFAFA",
          surface: "#FFFFFF",

          text: "#0F172A",
          muted: "#475569",

          border: "#E2E8F0",
        },

        alert: {
          background: "#FEF2F2",
          text: "#991B1B",
          border: "#FCA5A5",
        },

        category: {
          examBg: "#FEF3C7",
          examText: "#92400E",

          ouBg: "#E0E7FF",
          ouText: "#3730A3",

          placementBg: "#D1FAE5",
          placementText: "#065F46",

          generalBg: "#F1F5F9",
          generalText: "#334155",
        },
      },

      spacing: {
        touch: "48px",
      },

      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },

      boxShadow: {
        subtle:
          "0 1px 3px rgba(15,23,42,0.08), 0 1px 2px rgba(15,23,42,0.04)",

        card:
          "0 4px 6px rgba(15,23,42,0.06), 0 2px 4px rgba(15,23,42,0.04)",

        elevation:
          "0 10px 15px rgba(15,23,42,0.10), 0 4px 6px rgba(15,23,42,0.05)",
      },

      transitionDuration: {
        fast: "150ms",
        DEFAULT: "200ms",
      },
    },
  },

  plugins: [],
};

export default config;