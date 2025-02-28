/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'vercel-black': '#000',
        'vercel-dark': '#111',
        'vercel-white': '#fff',
        'vercel-gray': {
          50: '#fafafa',
          100: '#eaeaea',
          200: '#999',
          300: '#888',
          400: '#666',
          500: '#444',
          600: '#333',
          700: '#222',
          800: '#111',
        },
        'vercel-blue': {
          DEFAULT: '#0070f3',
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bcdaff',
          300: '#84b9ff',
          400: '#3e95ff',
          500: '#0070f3',
          600: '#0057d0',
          700: '#0046a8',
          800: '#013b89',
        },
        'vercel-purple': {
          DEFAULT: '#7928ca',
          50: '#f5f0ff',
          500: '#7928ca',
          600: '#6020a6',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        mono: [
          'Menlo',
          'Monaco',
          'Lucida Console',
          'Liberation Mono',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'Courier New',
          'monospace',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'vercel': '0 4px 14px 0 rgba(0,0,0,0.1)',
        'vercel-hover': '0 6px 20px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};

