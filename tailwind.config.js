/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/vue-tailwind-datepicker/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'salon-dark': '#423E3B', // Un tono oscuro y elegante, similar al carbón
        'salon-accent': '#A17E6E', // Un color piel o marrón claro, para contrastes suaves
        'salon-gold': '#BBA55D', // Un dorado oscuro, para un toque de lujo y calidez
        'salon-rose': '#7E6460', // Un tono rosa oscuro, sutil y sofisticado
        'salon-blue': '#3A506B', // Un azul oscuro, tranquilo y profesional
        'vtd-primary': colors.blue,
        'vtd-secondary': colors.gray
      },
      backgroundImage: {
        hero: "url('/img/1.jpg')"
      }
    }
  },
  daisyui: {
    themes: ['business']
  },
  plugins: [require('daisyui')]
}
