/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand navy — tuned to the logo's blue hue (#000048), but lifted in
        // luminance so the dark SECTIONS actually read as that blue instead of
        // near-black. navy-950 is the section backdrop; the ramp climbs cohesively.
        navy: {
          950: '#000d26', // DARK SECTION BACKDROP — deeper true navy-blue (no purple)
          900: '#031a42', // cards/panels on dark sections
          800: '#0a3068',
          700: '#124088',
          600: '#1c53a8',
          500: '#2d6bc9',
          100: '#e5e7f6',
          50: '#f1f2fb',
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
        // Neutrals — subtly warm so the light-dominant palette reads premium,
        // not cold/corporate. cloud-100 is the "paper" base for light sections.
        cloud: {
          50: '#ffffff',
          100: '#f7f6f3', // warm paper base
          200: '#efede8',
          300: '#e0ddd5',
          400: '#c4bfb4',
          500: '#8f887b',
          600: '#5f5a50',
          700: '#3a3730',
        },
        // Ink — near-black for body text & headings on light backgrounds
        // (so copy reads BLACK, not blue). Navy stays for dark backgrounds/brand.
        ink: {
          DEFAULT: '#15171c',
          900: '#15171c',
          800: '#2a2d34',
          700: '#40444d',
        },
        // Sand — a warm secondary accent for dividers, eyebrows, subtle highlights.
        sand: {
          100: '#f3ead9',
          400: '#cba876',
          500: '#b7935f',
          600: '#9c7c4c',
        },
      },
      fontFamily: {
        // Manrope — clean, neutral, modern sans for headlines.
        display: ['Manrope', 'system-ui', 'sans-serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.9rem, 7vw, 6rem)', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['clamp(2.35rem, 5vw, 4.25rem)', { lineHeight: '1.03', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-md': ['clamp(1.9rem, 3.6vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
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
