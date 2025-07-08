/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        appleGreen: '#8EA604',
        amber: '#F5BB00',
        gamboge: '#EC9F05',
        cocoaBrown: '#D76A03',
        rust: '#BF3100',
        primary: '#8EA604',
        secondary: '#F5BB00',
        accent: '#EC9F05',
        warning: '#D76A03',
        danger: '#BF3100'
      }
    }
  },
  plugins: []
};
