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
        vasuniti: {
          navy: '#14213D',
          blue: '#315FEA',
          accent: '#4F7CFF',
          bg: '#FFFFFF',
          alt: '#F5F7FB',
          text: '#172033',
          muted: '#64748B',
          border: '#E2E8F0',
          success: '#16A34A',
        },
        swco: {
          navy: '#14213D',
          blue: '#315FEA',
          accent: '#4F7CFF',
          bg: '#FFFFFF',
          alt: '#F5F7FB',
          text: '#172033',
          muted: '#64748B',
          border: '#E2E8F0',
          success: '#16A34A',
        },
        brand: {
          50: '#eff4ff',
          100: '#dbe6fe',
          200: '#bfd3fe',
          300: '#93bbfd',
          400: '#4F7CFF',
          500: '#315FEA',
          600: '#2347d4',
          700: '#1c38af',
          800: '#1b2f87',
          900: '#14213D',
          950: '#0c1426',
        },
        accent: {
          cyan: '#0ea5e9',
          indigo: '#4f46e5',
          violet: '#7c3aed',
          emerald: '#16a34a',
          amber: '#d97706',
        },
        dark: {
          bg: '#0B1120',
          card: '#111827',
          surface: '#1E293B',
          border: 'rgba(255, 255, 255, 0.1)',
          'border-highlight': 'rgba(255, 255, 255, 0.18)',
          text: '#F8FAFC',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
        light: {
          bg: '#FFFFFF',
          card: '#FFFFFF',
          surface: '#F5F7FB',
          border: '#E2E8F0',
          'border-highlight': '#CBD5E1',
          text: '#172033',
          muted: '#64748B',
          subtle: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
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
