/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0f0f0f',
          900: '#0b0b0b',
          800: '#0f0f0f',
        },
        ink: '#ffffff',
        line: '#1f1f1f'
      },
      boxShadow: {
        soft: '0 6px 30px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem'
      },
      spacing: {
        '18': '4.5rem'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out'
      }
    },
  },
  plugins: [],
}
