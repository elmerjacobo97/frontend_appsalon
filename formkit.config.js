import { generateClasses } from '@formkit/themes'

const config = {
  config: {
    classes: generateClasses({
      global: {
        wrapper: 'space-y-2 mb-1',
        label: 'text-gray-300 text-salon-gold',
        message: 'text-sm text-red-500 mb-1',
        input:
          'w-full p-2 border border-salon-rose rounded focus:outline-none focus:ring-2 focus:ring-salon-accent focus:border-transparent placeholder:text-salon-rose'
      },
      submit: {
        input:
          '$reset bg-salon-accent text-white w-full mt-5 p-2 rounded hover:bg-salon-rose transition-colors duration-300'
      }
    })
  }
}

export default config
