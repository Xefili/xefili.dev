/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./docs/*.html", "./tools/*.html", "./blog/*.html", "./blog/*.js", "./zeus/*.html", "./airguard/*.html"], //narrow down to speed up build times
  theme: {
    fontFamily: {
      'sans': ['Roboto Flex', 'system-ui', 'sans-serif'],
      'headerFont': ['Poppins', 'system-ui', 'sans-serif'],
      'mono': ['Ubuntu Mono', 'Cascadia Code', 'monospace'],
      'zeusMono': ['Cascadia Code', 'Ubuntu Mono', 'monospace'],
      'circle': ['Plus Jakarta Sans', 'sans-serif'],
      'circleBold': ['Plus Jakarta Sans Extrabold', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}