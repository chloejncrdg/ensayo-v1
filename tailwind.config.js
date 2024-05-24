/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-black': ['SFBlack', 'sans-serif'],
        'sf-bold': ['SFBold', 'sans-serif'],
        'sf-regular': ['SFRegular', 'sans-serif'],
        'sf-light': ['SFLight', 'sans-serif']
      }
    },
  },
  plugins: [],
}