/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080B0A',
          secondary: '#111714',
          tertiary: '#161F1A',
          card: '#0D1310',
        },
        accent: {
          DEFAULT: '#75F0A8',
          hover: '#8bf3b6',
          muted: 'rgba(117, 240, 168, 0.15)',
          glow: 'rgba(117, 240, 168, 0.3)',
        },
        border: {
          DEFAULT: '#25332B',
          muted: '#1B2620',
          hover: '#34473C',
        },
        text: {
          primary: '#F5F7F5',
          secondary: '#A0AAA3',
          muted: '#627068',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'terminal-blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
