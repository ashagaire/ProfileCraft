/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f19f41',
        // foreground: '#F8FAFC',
      },
      fontWeight: {
  normal: '400',
  medium: '550', 
  semibold: '600',
  bold: '700',
},
    },
  },
  plugins: [],
}
