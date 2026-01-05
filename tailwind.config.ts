import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#0A0E1A",
        foreground: "#E6F1FF",
        border: "rgba(255, 255, 255, 0.1)",
        input: "rgba(255, 255, 255, 0.1)",
        ring: "#1FCC9A",
        primary: {
          DEFAULT: "#A5C626",
          foreground: "#0A0E1A",
        },
        secondary: {
          DEFAULT: "#1FCC9A",
          foreground: "#0A0E1A",
        },
        muted: {
          DEFAULT: "#161B2C",
          foreground: "#9BA4B5",
        },
        accent: {
          DEFAULT: "#1FCC9A",
          foreground: "#0A0E1A",
        },
        popover: {
          DEFAULT: "#0F172A",
          foreground: "#E6F1FF",
        },
        card: {
          DEFAULT: "rgba(16, 22, 35, 0.7)",
          foreground: "#E6F1FF",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #A5C626, #1FCC9A)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
