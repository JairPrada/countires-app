/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./*.html', './public/**/*.html', './src/**/*.jsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'elements-lt': 'hsl(0, 0%, 100%)',
        'background-lt': 'hsl(0, 0%, 98%)',
        'text-lt': 'hsl(200, 15%, 8%)',
        'background-dk': 'hsl(207, 26%, 17%)',
        'elements-dk': 'hsl(209, 23%, 22%)',
        'text-dk': 'hsl(0, 0%, 100%)',
        'primary':'#004038'
      },
      fontFamily: {
        custom: ['Nunito Sans', 'sans-serif'],
      },
      gridTemplateColumns: {
        gallery: 'repeat(auto-fill, minmax(250px,1fr))',
      },
    },
  },
  plugins: [],
}
