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
          'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        'custom-2': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      },

      keyframes: {
        feedback: {
          '0%': { opacity: '0.7' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        feedback: 'feedback 1s ease-in-out'
      }
    }
  },
  plugins: []
};
