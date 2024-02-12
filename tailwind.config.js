/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./docs/*.html"], //narrow down to speed up build times
  theme: {
    fontFamily: {
      'sans': ['Roboto Flex', 'system-ui', 'sans-serif'],
      'headerFont': ['Poppins', 'system-ui', 'sans-serif'],
      'mono': ['Ubuntu Mono', 'Cascadia Code', 'monospace'],
      'zeusMono': ['Cascadia Code', 'Ubuntu Mono', 'monospace']
    },
    extend: {},
  },
  plugins: [],
}