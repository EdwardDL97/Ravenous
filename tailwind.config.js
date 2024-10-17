/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'limeGreen': 'hsl(69, 85%, 60%)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'backimage': 'url("./src/assets/stars.jpg")',
        'bgfood': 'url("./src/assets/foodbg.jpg")'
      }
    },
  },
  plugins: [],
}

