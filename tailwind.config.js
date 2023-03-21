/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Merriweather Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'black': '#292929',
        'dark-gray': '#757575',
        'light-gray': '#e5e7eb',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
