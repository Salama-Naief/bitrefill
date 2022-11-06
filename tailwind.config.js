/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#002b28",
        secondary:"#ff001c",
        error:"#D92D18"
      }
    
    },
  },
  plugins: [],
}
