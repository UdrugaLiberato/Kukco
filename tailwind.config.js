/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f6fb",
          100: "#e8edf6",
          200: "#cbd7eb",
          300: "#9db3d6",
          400: "#688abd",
          500: "#4569a4",
          600: "#345088",
          700: "#2b406e",
          800: "#26375d",
          900: "#0d1b33",
          950: "#08111f",
        },
        brand: {
          50: "#eff8ff",
          100: "#dbeefe",
          200: "#bfe2fe",
          300: "#93d0fd",
          400: "#60b4fa",
          500: "#3b95f6",
          600: "#2577eb",
          700: "#1d61d8",
          800: "#1e4faf",
          900: "#1e448a",
          950: "#172b54",
        },
        electric: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", lg: "2rem" },
        screens: { "2xl": "1200px" },
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(13,27,51,0.18)",
        glow: "0 0 0 1px rgba(245,158,11,0.25), 0 20px 50px -20px rgba(245,158,11,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        spark: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        spark: "spark 2.5s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
