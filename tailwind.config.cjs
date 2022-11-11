/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      "purple-prim": "#9677B3",
      "purple-dark-prim": "#564D8C",
      "white": "#DBD1DF"
    },
    extend: {},
  },
  plugins: [],
}