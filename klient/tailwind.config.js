// filepath: /c:/Users/bw141/Desktop/System zarządania/klient/tailwind.config.js
/**@type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      'course-details-heading-small' : ['26px', '36px'],
      'course-details-heading-large' : ['36px', '44px'],
      'home-heading-small' : ['28px', '34px'],
      'home-heading-large' : ['48px', '56px'],
      'default': ['15px', '21px'],
    },
    gridTemplateColumns: {
      'auto': 'repeat(auto-fill, minmax(250px, 1fr))',
      'course-card': 'repeat(auto-fill, minmax(250px, 1fr))',
    },
  },
  plugins: [],
};
