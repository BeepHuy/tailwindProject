/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        'box0': '1px 1px 10px 2px #e7dcdc',
      },
      dropShadow: {
        'text0': '1px -2px 1px #161421',
        'textIB': '2px 1px 1px #34495e',
      }
    },
  },
  plugins: [],
};
