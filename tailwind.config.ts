import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep black — primary dark background
        soil: {
          DEFAULT: "#0A0A0A",
          light: "#1A1A1A",
          rim: "#2A2A2A",
        },
        // Forest green — growth, agriculture, life
        leaf: {
          DEFAULT: "#1E6B3A",
          dark: "#145229",
          light: "#2D9654",
        },
        // Gold — premium, harvest, CTAs
        clay: {
          DEFAULT: "#C9943A",
          dark: "#A87A2E",
          light: "#E8B655",
        },
        // Bright gold — highlights and accents
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#B8961E",
          light: "#F0D060",
        },
        // Off-white — warm readable background
        parchment: {
          DEFAULT: "#F8F6F0",
          dim: "#EEEADE",
        },
        ink: "#0A0A0A",
      },
      fontFamily: {
        display: ["var(--font-zilla)", "Georgia", "serif"],
        body: ["var(--font-work)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(33,26,18,0.06) 1px, transparent 0)",
      },
      backgroundSize: {
        grain: "18px 18px",
      },
    },
  },
  plugins: [],
};
export default config;
