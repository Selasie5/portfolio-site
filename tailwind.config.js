/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#74f437",
        secondary:"#0b2110",
        background: "#151813"
      },

    },
  },
  plugins: [],
}

