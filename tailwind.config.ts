import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep black — dark accents and text
        soil: {
          DEFAULT: "#0A0A0A",
          light: "#1A1A1A",
          rim: "#2A2A2A",
        },
        // Rich forest green — dominant primary color
        leaf: {
          DEFAULT: "#1B7A3D",
          dark: "#0F4A23",
          light: "#2FA555",
        },
        // Gold — accents and highlights
        clay: {
          DEFAULT: "#D4AF37",
          dark: "#B8961E",
          light: "#E8C547",
        },
        // Bright gold — CTAs and emphasis
        gold: {
          DEFAULT: "#E8D460",
          dark: "#D4AF37",
          light: "#F4E8A8",
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
