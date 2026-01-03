/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2540", // Deep Blue
        accent: "#FF9F43", // Soft Orange
        text: "#1F2937", // Dark Gray
        light: "#FDFBF7", // Soft Off-white
        "light-peach": "#FFF5F0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

