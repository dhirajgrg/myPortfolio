/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary palette
        primary: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        // Base / neutral
        base: {
          50:  "#fafaf9",
          100: "#f5f5f0",
          200: "#e8e8e0",
          300: "#d4d4c8",
          400: "#a8a89a",
          500: "#737368",
          600: "#57574e",
          700: "#404038",
          800: "#282820",
          900: "#181812",
          950: "#0a0a06",
        },
        // Accent
        accent: {
          DEFAULT: "#d4e6a5",
          dark:    "#a8cc5a",
          light:   "#eef5d6",
        },
        // Semantic
        success: "#22c55e",
        warning: "#f59e0b",
        error:   "#ef4444",
        info:    "#38bdf8",
      },
      fontFamily: {
        // Headings — bold, editorial
        display: ["'Playfair Display'", "Georgia", "serif"],
        // Body
        body:    ["'DM Sans'", "system-ui", "sans-serif"],
        // Mono / code accents
        mono:    ["'JetBrains Mono'", "monospace"],
        // Kept for backward compat
        bilbo:     ["Bilbo Swash Caps", "cursive"],
        braahOne:  ["Braah One", "sans-serif"],
        inter:     ["Inter", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem",  { lineHeight: "1rem" }],
        xs:    ["0.75rem",  { lineHeight: "1.1rem" }],
        sm:    ["0.875rem", { lineHeight: "1.35rem" }],
        base:  ["1rem",     { lineHeight: "1.6rem" }],
        lg:    ["1.125rem", { lineHeight: "1.7rem" }],
        xl:    ["1.25rem",  { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem",   { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem",  { lineHeight: "2.5rem" }],
        "5xl": ["3rem",     { lineHeight: "1.15" }],
        "6xl": ["3.75rem",  { lineHeight: "1.1" }],
        "7xl": ["4.5rem",   { lineHeight: "1.05" }],
        "8xl": ["6rem",     { lineHeight: "1" }],
        "9xl": ["8rem",     { lineHeight: "1" }],
      },
      spacing: {
        18:  "4.5rem",
        22:  "5.5rem",
        26:  "6.5rem",
        30:  "7.5rem",
        34:  "8.5rem",
        38:  "9.5rem",
        42:  "10.5rem",
        46:  "11.5rem",
        50:  "12.5rem",
        54:  "13.5rem",
        58:  "14.5rem",
        62:  "15.5rem",
        66:  "16.5rem",
        70:  "17.5rem",
        74:  "18.5rem",
        78:  "19.5rem",
        82:  "20.5rem",
        86:  "21.5rem",
        90:  "22.5rem",
        94:  "23.5rem",
        98:  "24.5rem",
        102: "25.5rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        card:   "0 2px 16px 0 rgba(20,83,45,0.10), 0 1px 4px 0 rgba(20,83,45,0.06)",
        "card-hover": "0 8px 32px 0 rgba(20,83,45,0.16), 0 2px 8px 0 rgba(20,83,45,0.08)",
        glow:   "0 0 24px 4px rgba(34,197,94,0.18)",
        nav:    "0 2px 24px 0 rgba(0,0,0,0.08)",
        btn:    "0 2px 8px 0 rgba(20,83,45,0.20)",
        "btn-hover": "0 4px 16px 0 rgba(20,83,45,0.30)",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
        400: "400ms",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.12) 0%, transparent 70%)",
        "section-fade":
          "linear-gradient(180deg, transparent 0%, rgba(240,253,244,0.8) 100%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.6s ease-out forwards",
        "fade-up-d1": "fade-up 0.6s 0.1s ease-out forwards",
        "fade-up-d2": "fade-up 0.6s 0.2s ease-out forwards",
        "fade-up-d3": "fade-up 0.6s 0.3s ease-out forwards",
        "fade-in":    "fade-in 0.5s ease-out forwards",
        float:        "float 3s ease-in-out infinite",
        "scale-in":   "scale-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
