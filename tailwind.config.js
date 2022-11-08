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
        secondary:{
          100:"#ff001c",
          200:"#b30b0b"
        },
        starColor:"#f8d448",
        dark:{
          100:"#303633",
          200:"#1f2421"
        },
        customGray:{
          100:"#ecefed",
          200:"#6a716e"
        },
        error:"#D92D18"
      }
    
    },
  },
  plugins: [],
}
