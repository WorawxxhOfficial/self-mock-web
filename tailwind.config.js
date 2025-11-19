/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0D0615',
        'primary': '#6A1B9A',
        'secondary': '#E0B0FF',
        'text-primary': '#F8F8F8',
        'milky-blue': '#a3d8f4',
      },
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

