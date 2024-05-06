/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': '320px',
      },
      colors:{
        'homepage_bg':'#F8F9FF',
        'imitregreen':'#3EBF53',
        'bg_gray':'#E5F4F2',
        'text_color':'#2D2D2D',
        'sponsor_border':'#D8D8D8',
        'learn_more':'#009379'
      }
    },
  },
  plugins: [],
}