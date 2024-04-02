/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        'box0': '0px 2px 2px 5px #8080800d',
      }
    },
  },
  plugins: [],
};
