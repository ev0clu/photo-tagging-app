/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'lilita-one': ['"Lilita One"', 'cursive'],
        'roboto-sans': ['"Roboto"', 'sans-serif']
      },
      boxShadow: {
        'custom-1':
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
      }
    }
  },
  plugins: []
};
