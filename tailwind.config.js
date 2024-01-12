/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        authBgS: '#feb206',
        authBgE: '#f9cb33',
        btnBg: '#feaf00',
        navBg: '#F2EAE1',
        mainBg: '#fdfdfd'
      }
    }
  },
  plugins: []
};
