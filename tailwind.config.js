/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand: near-black deep navy (darkest)
        navy: {
          950: '#000010',
          900: '#01011d',
          800: '#03052c',
          700: '#080d45',
          600: '#141c6b',
          500: '#243192',
          100: '#e4e6f2',
          50: '#f1f2fa',
        },
        // Accent: ONE red everywhere — exactly the "Get Your Free Estimate"
        // button red (#7d1420). Every brand shade resolves to it so red is
        // always identical site-wide. (Lighter "hover" tints handled via /opacity.)
        brand: {
          DEFAULT: '#7d1420',
          700: '#7d1420',
          600: '#7d1420',
          500: '#7d1420',
          400: '#7d1420',
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
        // Hero service orbit: ring rotates one way, photos counter-rotate to stay upright
        'hero-orbit': 'heroOrbit 46s linear infinite',
        'hero-orbit-rev': 'heroOrbit 46s linear infinite reverse',
      },
      keyframes: {
        heroOrbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
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
