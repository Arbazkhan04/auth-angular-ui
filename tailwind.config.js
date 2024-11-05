/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Include all Angular template files
  ],
  theme: {
    extend: {
      colors: {
        loginPageBgColor: 'var(--login-page-bg-color)', // #E1E1E2 #C9D6FE
        loginFormBgBlue: '#7894EC',
        inputBgColor: '#EEEDEE',
      },
      borderRadius: {
        loginFormBr: '25px', // Add a custom rounded class with a value of 25px
        loginBr: '100px ',
        inputBr: '16px',
      },
      boxShadow: {
        loginFormShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Example custom shadow
      },
    },
  },
  plugins: [],
}
