/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {},
  },
  colors: {
    'custom-blue' : '#203F82',
  },
  plugins: [],

  plugins: [
    require('@tailwindcss/forms'),
  ],
}

  