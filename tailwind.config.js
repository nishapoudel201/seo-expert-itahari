/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          150: '#fce7f3',
        },
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        ink: {
          DEFAULT: '#0f172a', // Deep slate-900
          muted: '#475569',   // Slate-600
          faint: '#94a3b8',   // Slate-400
          border: '#e2e8f0',  // Slate-200
        },
        paper: {
          DEFAULT: '#f8fafc', // Slate-50
          warm: '#ffffff',    // Crisp Pure White
          card: '#ffffff',
          dark: '#0f172a',
        },
        pastel: {
          sage: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#059669',
          },
          terracotta: {
            50: '#fff1f2',
            100: '#ffe4e6',
            200: '#fecdd3',
            300: '#fda4af',
            400: '#fb7185',
            500: '#e11d48',
          },
          lavender: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
          },
          butter: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#d97706',
          },
          sky: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0284c7',
          }
        },
        void: '#fffafc',
        surface: {
          DEFAULT: '#ffffff',
          card: '#ffffff',
          border: 'rgba(244, 114, 182, 0.2)',
          glow: 'rgba(244, 114, 182, 0.15)',
        },
        babypink: {
          50: '#fff5f8',
          100: '#fde8ef',
          200: '#fcd2df',
          300: '#f8a5c2',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          glow: 'rgba(244, 114, 182, 0.35)',
        },
        ember: {
          DEFAULT: '#f472b6',
          bright: '#fb7185',
          glow: 'rgba(244, 114, 182, 0.35)',
        }
      },
      fontFamily: {
        sans: ['"Geist"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', '"Geist"', '"Manrope"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Manrope"', '"Geist"', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        '2xs': '0 1px 2px 0 rgba(15, 23, 42, 0.03)',
        'xs': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'indie': '0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'indie-lg': '0 10px 15px -3px rgba(15, 23, 42, 0.07), 0 4px 6px -4px rgba(15, 23, 42, 0.03)',
        'indie-sm': '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        'indie-color': '0 4px 14px 0 rgba(236, 72, 153, 0.15)',
        'subtle': '0 2px 8px rgba(244, 114, 182, 0.08)',
        'elevated': '0 20px 25px -5px rgba(244, 114, 182, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
        'glow-pink': '0 0 25px rgba(244, 114, 182, 0.35)',
        'glow-pink-lg': '0 0 45px rgba(244, 114, 182, 0.25)',
        'glow-subtle': '0 0 35px rgba(244, 114, 182, 0.15)',
        'card-pink': '0 4px 20px -2px rgba(244, 114, 182, 0.1), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'reveal-up': 'revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.97)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}