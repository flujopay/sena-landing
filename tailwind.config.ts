/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
        adobe: ["AdobeClean", "sans-serif"],
      },
    },
  },
  plugins: [],
};
