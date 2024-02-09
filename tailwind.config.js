/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Roboto Flex', 'system-ui', 'sans-serif'],
      'headerFont': ['Poppins', 'system-ui', 'sans-serif'],
      'mono': ['Ubuntu Mono', 'Cascadia Code', 'monospace']
    },
    extend: {},
  },
  plugins: [],
}