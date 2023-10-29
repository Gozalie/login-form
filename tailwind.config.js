/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./asset/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      backgroundImage: {
        login: 'url("../img/bg-login.png")',
      },
    },
  },
  plugins: [],
};
