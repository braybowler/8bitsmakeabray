/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      boxShadow: {
        '8bit': '4px 4px 0px rgba(0, 0, 0, 1)', // 8-bit shadow effect
      },
    },
  },
  plugins: [],
}

