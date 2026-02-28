/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#0D6B8A',
          hover: '#0A5570',
          light: '#E0F4FA',
        },
        accent: {
          DEFAULT: '#26C6DA',
          hover: '#00B0C8',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          2: '#EEF4F8',
        },
        brand: {
          bg: '#F7F9FB',
          border: '#D8E6EE',
          text: '#0F1C24',
          muted: '#5A7A8A',
          light: '#8AAAB8',
        },
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
      },
      boxShadow: {
        tool: '0 0 0 1px rgba(13, 107, 138, 0.08), 0 20px 60px rgba(13, 107, 138, 0.12)',
        card: '0 4px 16px rgba(13, 107, 138, 0.10), 0 2px 6px rgba(13, 107, 138, 0.06)',
        lg: '0 8px 32px rgba(13, 107, 138, 0.14), 0 4px 12px rgba(13, 107, 138, 0.08)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}