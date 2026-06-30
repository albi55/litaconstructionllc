/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand: deep navy blue (built around #010048)
        navy: {
          950: '#010048',
          900: '#040757',
          800: '#0a1270',
          700: '#152089',
          600: '#2433a6',
          500: '#3a4ec4',
          100: '#e6e8f5',
          50: '#f2f3fb',
        },
        // Accent: deep, dark red (darker than before)
        brand: {
          DEFAULT: '#7d1420',
          700: '#5f0f18',
          600: '#7d1420',
          500: '#9a1a29',
          400: '#c0394a',
          50: '#f7e7e9',
        },
        // Neutrals: clean whites & cool grays
        cloud: {
          50: '#ffffff',
          100: '#f7f8fa',
          200: '#eef1f5',
          300: '#dde2ea',
          400: '#c2c9d6',
          500: '#8b95a7',
          600: '#5b6577',
          700: '#3a4254',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '0.96', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.0', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.06', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        // Generous rounding — the "round, not sharp" direction
        DEFAULT: '0.75rem',
        sm: '0.5rem',
        md: '0.875rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(15, 27, 61, 0.12)',
        card: '0 18px 50px -20px rgba(15, 27, 61, 0.18)',
        lift: '0 28px 70px -24px rgba(15, 27, 61, 0.28)',
        red: '0 18px 50px -16px rgba(125, 20, 32, 0.45)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'marquee': 'marquee 40s linear infinite',
        'promo-marquee': 'marquee 32s linear infinite',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
