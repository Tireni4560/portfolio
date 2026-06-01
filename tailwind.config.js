/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: {
          DEFAULT: '#09090c',
          elevated: '#111118',
          deep: '#060608',
        },
        // Text
        text: {
          DEFAULT: '#ededee',
          muted: 'rgba(237, 237, 238, 0.52)',
          faint: 'rgba(237, 237, 238, 0.22)',
        },
        // Accent - Electric Indigo
        accent: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dim: 'rgba(99, 102, 241, 0.18)',
          glow: 'rgba(99, 102, 241, 0.25)',
        },
        // Semantic
        available: '#22c55e',
        surface: 'rgba(255, 255, 255, 0.038)',
        // Borders
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.065)',
          hover: 'rgba(255, 255, 255, 0.13)',
          accent: 'rgba(99, 102, 241, 0.35)',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.72rem', { lineHeight: '1.4' }],
        'sm': ['0.85rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.15rem', { lineHeight: '1.6' }],
        'xl': ['1.4rem', { lineHeight: '1.4' }],
        '2xl': ['1.85rem', { lineHeight: '1.2' }],
        '3xl': ['2.5rem', { lineHeight: '1.1' }],
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.35)',
        'float': '0 20px 60px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)',
        'glow': '0 0 0 1px rgba(99, 102, 241, 0.18), 0 0 30px rgba(99, 102, 241, 0.25)',
      },
      maxWidth: {
        'content': '1240px',
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 9rem)',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'float-1': 'float1 18s ease-in-out infinite',
        'float-2': 'float2 22s ease-in-out infinite',
        'float-3': 'float3 16s ease-in-out infinite',
        'marquee-l': 'marquee-left 30s linear infinite',
        'marquee-r': 'marquee-right 38s linear infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.35)', opacity: '1' },
        },
        float1: {
          '0%, 100%': { transform: 'translateX(-20px)' },
          '50%': { transform: 'translateX(20px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(-15px)' },
          '50%': { transform: 'translateY(15px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(-10px,-10px)' },
          '50%': { transform: 'translate(10px,10px)' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}