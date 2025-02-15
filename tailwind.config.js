/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9D23',  // maroon shade
        secondary: '#A8A08B',  // soil color shade
        dark: '#070707',  // black shade  
        grey: '#FFFFFF0D',  // grey shade 
        light:"#FFF",  // light shade
      },
      fontFamily: {
        modern: ['modern', 'sans-serif'], 
        
      },
    },
  },
  plugins: [],
}
