/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "220px",
      sm: "520px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0a0a0f",
          elevated: "#141420",
          surface: "#1a1a28",
          luxury: "#050508",
        },
        light: {
          DEFAULT: "#f8fafc",
          elevated: "#ffffff",
          surface: "#f1f5f9",
          muted: "#e2e8f0",
        },
        primary: {
          DEFAULT: "#d4a853",
          muted: "#b8954a",
          shimmer: "#f0d78c",
          deep: "#8b7355",
          foreground: "#0a0a0f",
        },
        gold: {
          DEFAULT: "#d4a853",
          light: "#e8c778",
          dark: "#8b7355",
          muted: "#a67c3d",
          glow: "rgba(212, 168, 83, 0.4)",
        },
        extra: "#0d9488",
        teal: {
          DEFAULT: "#14b8a6",
          light: "#2dd4bf",
        },
        secondary: "#94a3b8",
        normal: "#f8fafc",
        surface: "#141420",
        background: "#050508",
        mutedfg: "#64748b",
        border: "rgba(212, 168, 83, 0.12)",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(0, 0, 0, 0.3), 0 4px 16px -4px rgba(0, 0, 0, 0.2)",
        "soft-light": "0 2px 8px -2px rgba(0, 0, 0, 0.06), 0 4px 16px -4px rgba(0, 0, 0, 0.04)",
        card: "0 4px 24px -8px rgba(0, 0, 0, 0.4)",
        "card-light": "0 4px 24px -8px rgba(0, 0, 0, 0.08)",
        glow: "0 0 40px -12px rgba(212, 168, 83, 0.5)",
        "glow-lg": "0 0 60px -15px rgba(212, 168, 83, 0.6)",
        "gold-glow": "0 0 20px rgba(212, 168, 83, 0.3), 0 4px 30px rgba(212, 168, 83, 0.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "luxury-gradient": "linear-gradient(135deg, rgba(212, 168, 83, 0.05) 0%, transparent 50%, rgba(212, 168, 83, 0.02) 100%)",
        "luxury-gradient-light": "linear-gradient(135deg, rgba(166, 124, 61, 0.08) 0%, transparent 50%, rgba(166, 124, 61, 0.03) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "shimmer": "shimmer 2s infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 168, 83, 0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(212, 168, 83, 0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};