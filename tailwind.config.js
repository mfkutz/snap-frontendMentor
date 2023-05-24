/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('./images/desktop.png')",
        'mobile': "url('./images/mobile.png')"
      }
    },
  },
  plugins: [],
}