/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '1.25em',
      screens:{
        'xl': '1200px',
        '2xl': '1200px',
      },
    },
    extend: {},
    fontFamily: {
      signature: ['Bebas Neue','cursive']
    }
  },
  plugins: [require('daisyui')],
}


