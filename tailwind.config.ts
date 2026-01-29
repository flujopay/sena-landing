/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        canaro: ["var(--font-canaro)", "sans-serif"],
        adobe: ["var(--font-adobe)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
