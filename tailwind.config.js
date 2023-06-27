/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'hero-pattern': "url('./src/assets/img1.png')",
        'happy-customer': "url('./src/assets/happy-client.jpg')",
        'contact-us': "url('./src/assets/contact_us.jpg')",
      },
      // colors :{
      //   '[#E15039]': '#2AAFC0',
      //   'light': '#757575',
      // }

    },
  },
  plugins: [],
}