import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep loam soil — the base the whole ecosystem grows from
        soil: {
          DEFAULT: "#26190F",
          light: "#3A2818",
          rim: "#4C3520",
        },
        // Cassava-leaf green — primary, the crop itself
        leaf: {
          DEFAULT: "#3F6B35",
          dark: "#2A4A24",
          light: "#6E9459",
        },
        // Laterite clay — the red-brown soil of the Niger Delta, used for stamps & CTAs
        clay: {
          DEFAULT: "#9C4221",
          dark: "#732F17",
          light: "#C5623B",
        },
        // Harvest gold — grain, feed, cassava flour
        gold: {
          DEFAULT: "#D9A441",
          dark: "#B3822C",
          light: "#EFCA85",
        },
        // Parchment — warm paper, not a pure cream; carries a slight green undertone
        parchment: {
          DEFAULT: "#F1EEDF",
          dim: "#E7E2CE",
        },
        ink: "#211A12",
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
