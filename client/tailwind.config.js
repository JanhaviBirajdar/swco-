/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f5ff',
          100: '#e0ecff',
          200: '#b9d5ff',
          300: '#7cb2ff',
          400: '#3888ff',
          500: '#005ee6',
          600: '#004ec2',
          700: '#003e9e',
          800: '#003380',
          900: '#002561',
          950: '#00153d',
        },
        accent: {
          cyan: '#06b6d4',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
        dark: {
          bg: '#080B10',
          card: '#0D131C',
          surface: '#111A26',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(255, 255, 255, 0.16)',
          text: '#F1F5F9',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
        light: {
          bg: '#FAFBFC',
          card: '#FFFFFF',
          surface: '#F4F6F9',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-highlight': 'rgba(0, 0, 0, 0.16)',
          text: '#090D14',
          muted: '#475569',
          subtle: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'rotate-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'border-beam': 'borderBeam 6s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderBeam: {
          '100%': {
            'offset-distance': '100%',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glass-gradient-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(56, 136, 255, 0.3)',
        'glow-md': '0 0 35px -5px rgba(56, 136, 255, 0.4)',
        'glow-lg': '0 0 60px -10px rgba(56, 136, 255, 0.45)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'light-card': '0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 0 1px 1px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
