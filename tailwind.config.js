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
        neon: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bcdfff',
          300: '#7ec4ff',
          400: '#4da6ff',
          500: '#2b8aff',
          600: '#1a6fe8',
          700: '#1559b8',
          800: '#174891',
          900: '#173e73',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
          300: '#67e8f9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        riseIn: 'riseIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        floatY: 'floatY 6s ease-in-out infinite',
      },
      keyframes: {
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
