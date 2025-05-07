
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
        heading: ['Playfair Display', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // HABY mejorada paleta de colores morada
        "haby-purple": {
          DEFAULT: "#6A35D9",
          50: "#F6F3FE",
          100: "#E9E3FD",
          200: "#D3C7FB",
          300: "#BEABF9",
          400: "#A88FF7",
          500: "#9373F5",
          600: "#7E57F3",
          700: "#6A35D9",
          800: "#5A25C9",
          900: "#4A1E9E",
        },
        "haby-lavender": "#9B87F5",
        "haby-violet": "#7E69AB",
        "haby-indigo": "#4A1E9E",
        "haby-lilac": "#D6BCFA",
        "haby-plum": "#8047C8",
        "haby-mauve": "#C084FC",
        "haby-amethyst": "#8B5CF6",
        "haby-orchid": "#9768D1",
        "haby-softPurple": "#E9E3FD",
        "haby-deepPurple": "#4A1E9E",
        "haby-charcoal": "#1A1F2C",
        "haby-darkGray": "#2B2E3B",
        "haby-gray": "#F1F0FB",
        "haby-blue": "#1EAEDB",
        sidebar: {
          foreground: "hsl(var(--sidebar-foreground))",
          background: "hsl(var(--sidebar-background))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'soft': '0 4px 15px rgba(106, 53, 217, 0.1)',
        'glow': '0 0 15px rgba(106, 53, 217, 0.5)',
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        'button': '0 4px 6px -1px rgba(106, 53, 217, 0.2), 0 2px 4px -1px rgba(106, 53, 217, 0.1)',
        'dropdown': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
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
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)"
          },
          "100%": {
            opacity: "0",
            transform: "translateY(20px)"
          }
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0"
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1"
          }
        },
        "scale-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" }
        },
        "wave": {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "scale-out": "scale-out 0.3s ease-out",
        "slide-in-right": "slide-in-right 0.4s ease-out",
        "slide-out-right": "slide-out-right 0.4s ease-out",
        "enter": "fade-in 0.5s ease-out, scale-in 0.3s ease-out",
        "exit": "fade-out 0.5s ease-out, scale-out 0.3s ease-out",
        "float": "float 5s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "wave": "wave 1.5s ease-in-out"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'purple-gradient': 'linear-gradient(135deg, #6A35D9 0%, #9B87F5 100%)',
        'purple-soft': 'linear-gradient(135deg, #F6F3FE 0%, #E9E3FD 100%)',
        'hero-pattern': "url('/images/hero-bg.svg')",
        'dots-pattern': "radial-gradient(#6A35D9 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
