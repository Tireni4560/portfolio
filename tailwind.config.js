/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050816',
          secondary: '#07101f',
          tertiary: '#0b1327',
        },
        surface: {
          DEFAULT: 'rgba(8, 14, 28, 0.72)',
          strong: 'rgba(10, 18, 34, 0.92)',
          soft: 'rgba(255, 255, 255, 0.05)',
        },
        text: {
          DEFAULT: '#f4f7fb',
          muted: '#9aa7bd',
          'muted-2': '#7f8ba3',
        },
        accent: {
          DEFAULT: '#3b82f6',
          2: '#60a5fa',
          3: '#93c5fd',
        },
        cyan: '#7dd3fc',
        border: 'rgba(148, 163, 184, 0.18)',
        'border-strong': 'rgba(96, 165, 250, 0.28)',
      },
      fontFamily: {
        sans: ['Inter', 'General Sans', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '2rem',
        'lg': '1.5rem',
        'md': '1rem',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(59, 130, 246, 0.15)',
        'glow-strong': '0 0 60px rgba(59, 130, 246, 0.25)',
        'floating': '0 28px 90px rgba(0, 0, 0, 0.45)',
        'floating-soft': '0 16px 50px rgba(0, 0, 0, 0.28)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift': 'drift 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '100%': { transform: 'translateX(100px) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}