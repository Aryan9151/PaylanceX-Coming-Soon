/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#03060f',
          900: '#070b18',
          800: '#0c1220',
          700: '#131c30',
          600: '#1a2640',
        },
        neon: {
          50: '#eaf4ff',
          100: '#d0e8ff',
          200: '#a8d1ff',
          300: '#7ab9ff',
          400: '#4da6ff',
          500: '#1a8cff',
          600: '#0070f0',
          700: '#0058c0',
        },
        accent: {
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(26,140,255,0.12), transparent 70%)',
        grid: "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      boxShadow: {
        neon: '0 0 20px rgba(77,166,255,0.3)',
        'neon-sm': '0 0 10px rgba(77,166,255,0.4)',
        'neon-lg': '0 0 40px rgba(77,166,255,0.5)',
        glass: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)',
      },
      animation: {
        riseIn: 'riseIn 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        fadeScale: 'fadeScale 0.35s cubic-bezier(0.22,1,0.36,1) forwards',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        floatUp: 'floatUp linear infinite',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeScale: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(var(--tw-translate-x, 0))', opacity: '0' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
