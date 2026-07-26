import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#045C2F",
          50: "#E6F2EC",
          100: "#C2E0D1",
          400: "#0B7A41",
          600: "#045C2F",
          700: "#034423",
          900: "#022A16",
        },
        gold: {
          DEFAULT: "#D3A802",
          50: "#FBF3D9",
          100: "#F5E5AC",
          400: "#E3BE1B",
          600: "#D3A802",
          700: "#A98602",
        },
        crimson: {
          DEFAULT: "#AE0A21",
          50: "#F7E1E4",
          400: "#C71430",
          600: "#AE0A21",
          700: "#83081A",
        },
        ink: {
          DEFAULT: "#141412",
          800: "#1D1D1A",
          900: "#0F0F0D",
        },
        ivory: "#FAF8F3",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "arc-gradient":
          "conic-gradient(from 180deg at 50% 50%, #045C2F 0deg, #D3A802 120deg, #AE0A21 240deg, #045C2F 360deg)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 15, 13, 0.15)",
        card: "0 8px 30px -10px rgba(4, 92, 47, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
