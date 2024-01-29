/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Homemade Apple', 'cursive'],
        'kanit': ['Kanit', 'sans-serif'],
        'press-start': ['"Press Start 2P"', 'cursive'], // Wrap the font name in double quotes
      },
    },
  },
  plugins: [],
}

