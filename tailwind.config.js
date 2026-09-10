/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      colors: {
        // Backgrounds
        background: "#0B0F19",
        surface: "#111827",
        surfaceLight: "#1F2937",

        // Brand Colors
        primary: "#F97316",      // Sunset Orange
        primaryLight: "#FB923C",
        secondary: "#FBBF24",    // Golden Yellow
        accent: "#22C55E",       // Green

        // Text
        text: "#F9FAFB",
        muted: "#9CA3AF",

        // Borders
        border: "#374151",
      },

      backgroundImage: {
        hero:
          "linear-gradient(135deg,#0B0F19 0%,#151F32 45%,#25130A 100%)",

        card:
          "linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",

        glow:
          "radial-gradient(circle at top right,rgba(249,115,22,.20),transparent 45%)",
      },

      boxShadow: {
        glow: "0 0 35px rgba(249,115,22,.30)",
        card: "0 10px 30px rgba(0,0,0,.25)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4,0,0.2,1)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        fade: "fade 0.8s ease forwards",
        pulseSlow: "pulse 3s infinite",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        fade: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },

  plugins: [],
};