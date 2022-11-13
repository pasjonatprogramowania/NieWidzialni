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
      "white": "#DBD1DF",
      "blue-prim": "#303575",
      "blue-dark-prim": "#292464",
      "purple-lite-prim": "#997AB6",
      "orange-prim": "#e67e22",
      "grey": "#CAC0CE"
    },
    extend: {},
  },
  plugins: [],
}