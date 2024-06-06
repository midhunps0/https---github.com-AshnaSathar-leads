/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './*.html', './src/**/*.svelte', './src/**/*.css'],
  theme: {
    extend: {
      fontFamily: {
          sans: ['sans-serif']
      },
      // fontSize: {
      //     sm: ['13px', '20px'],
      //     base: ['16px', '24px'],
      //     lg: ['20px', '28px'],
      //     xl: ['24px', '32px'],
      // },
      colors: {
          error: '#f43f5e',
          warning: '#d9f99d',
          info: '#60a5fa',
          success: '#a3e635'
      }
    },
  },
  plugins: [
    require('tailwindcss')()
  ],
}

