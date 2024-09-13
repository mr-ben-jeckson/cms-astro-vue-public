/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,vue,astro,html}', // Adjust the path to match where your Vue files are located
    './public/**/*.html'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    }
  },
  plugins: []
}
