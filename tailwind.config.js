/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    screens: {
      x: { max: "480px" },
      xs: { min: "481px", max: "639px" },
      sm: { min: "642px", max: "768px" },
      md: { min: "769px", max: "1600px" },
    },
    extend: {
      boxShadow: {
        boxH: "1px 2px 2px 2px #ffffff",
        box0: "1px 1px 10px 2px #e7dcdc",
        boxmobe: "0px 2px 0px 0px #cacfd2",
        boxmobehove: "0px 3px 4px 0px #f4a8a5",
      },
      dropShadow: {
        text0: "1px -2px 1px #161421",
        textIB: "2px 1px 1px #34495e",
      },
      keyframes: {
        formDrop: {
          from: { opacity: 0, transform: "translateX(300px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        headerDrop: {
          from: { opacity: 0, transform: "translateY(-120px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slowA: "formDrop ease 0.5s",
        slowHD: "headerDrop ease 0.5s",
      },
    },
  },
  plugins: [],
};
