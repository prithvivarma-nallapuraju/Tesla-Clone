/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "280px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1250px",
    },
    extend: {
      backgroundSize: {
        '50%': '100%',
      '16': '4rem',
      }
    },
  },
  plugins: [],
}

