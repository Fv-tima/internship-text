/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#663399',
      'gray-dark': '#353535',
      'light-dark': '#4a4a4a',
      'light-gray':'#acacac',
      'footer-purple':'#7d51aa',
      'white':'#ffffff',
      'gray':'#aea0bc',
      'stain-white':'#f5f5f5',
      'black':'#000000',
      'light-purple':'#eee7f5'
    },
    extend: {},
  },
  plugins: [],
}
