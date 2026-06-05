import type { Config } from "tailwindcss";

/**
 * Tasarım token'ları — tek kaynak.
 * Karakter: "endüstriyel-rafine, sakin özgüven" (Ecolab / Diversey / Henkel hattı).
 * Dominant nötr + tek güçlü marka rengi (yeşil) + tek keskin vurgu (turkuaz).
 * Mor/gradient yok, küçük yarıçap, ince gölge.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        // Birincil marka yeşili (#157A63 = 600)
        teal: {
          50: "#eef6f3",
          100: "#d5eae3",
          200: "#aed6c8",
          300: "#7dbaa8",
          400: "#489a84",
          500: "#1f8267",
          600: "#157a63",
          700: "#11604e",
          800: "#104d40",
          900: "#0e4036",
          950: "#06231d",
        },
        // Derin lacivert / kurumsal nötr (#14233F = 900) — metin & koyu bölümler
        brand: {
          50: "#f2f4f8",
          100: "#e3e7f0",
          200: "#c6cfe0",
          300: "#9caeca",
          400: "#6c86ab",
          500: "#4a6690",
          600: "#394f73",
          700: "#2e3f5b",
          800: "#20304a",
          900: "#14233f",
          950: "#0c1628",
        },
        // Tek keskin vurgu — turkuaz (#1FB6A6 = 500), çok az kullanılacak
        accent: {
          50: "#effbf9",
          100: "#d5f5f0",
          200: "#ace9e1",
          300: "#75d8cd",
          400: "#3fc1b5",
          500: "#1fb6a6",
          600: "#149386",
          700: "#15756c",
          800: "#155d57",
          900: "#154d48",
          950: "#06302d",
        },
        // WIEBERR marka kırmızısı (alt marka kimliği)
        wieberr: {
          50: "#fff1f1",
          100: "#ffe0e1",
          200: "#ffc7ca",
          300: "#ff9fa4",
          400: "#ff5b62",
          500: "#ed1c29",
          600: "#d6101d",
          700: "#b30d18",
          800: "#911118",
          900: "#78131a",
          950: "#41060a",
        },
        ink: "#14233f",
        paper: "#f7f8f6", // kırık-beyaz zemin (saf beyaz değil)
        line: "#e4e7e2", // ince ayraç/çizgi rengi
      },
      fontFamily: {
        // next/font ile yüklenir — jenerik/sistem fontu yok
        sans: ["var(--font-sans)", "ui-sans-serif", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        sm: "3px",
        DEFAULT: "5px",
        md: "6px",
        lg: "8px",
        xl: "8px",
        "2xl": "10px",
        "3xl": "12px",
        "4xl": "14px",
        full: "9999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(20,35,63,.05)",
        soft: "0 1px 2px rgba(20,35,63,.04)",
        card: "0 1px 3px rgba(20,35,63,.06), 0 8px 20px -14px rgba(20,35,63,.18)",
        md: "0 12px 30px -16px rgba(20,35,63,.22)",
        glow: "0 1px 3px rgba(20,35,63,.06)",
        ring: "0 0 0 1px rgba(20,35,63,.06)",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s cubic-bezier(.16,1,.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
