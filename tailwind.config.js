/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium dark construction palette
        ink: {
          950: '#0a0a0b',
          900: '#101113',
          800: '#17181c',
          700: '#1f2126',
          600: '#2a2d34',
          500: '#3a3e47',
        },
        // Signature safety-amber accent
        amber: {
          DEFAULT: '#f5a623',
          400: '#fbbf24',
          500: '#f5a623',
          600: '#e08c0a',
        },
        bone: {
          50: '#fafaf8',
          100: '#f1f0ec',
          200: '#dedcd4',
          300: '#b9b6aa',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.0', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      maxWidth: {
        container: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
