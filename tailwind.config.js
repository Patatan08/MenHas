/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        vault: {
          bg: '#09090b',
          card: '#18181b',
          border: '#3f3f46',
          accent: '#8b5cf6',
        }
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease',
        'fade-in': 'fadeIn 0.15s ease',
        'slide-up': 'slideUp 0.2s ease',
      }
    },
  },
  plugins: [],
}
