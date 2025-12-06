/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2240',
          dark: '#0A2240',
        },
        secondary: {
          DEFAULT: '#1E4D8F',
        },
        accent: {
          DEFAULT: '#C7A76C',
        },
        background: {
          DEFAULT: '#FFFFFF',
        },
        gray: {
          custom: '#F3F4F6',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
        english: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


