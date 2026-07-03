/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: '#6c63ff',
        accent2: '#a78bfa',
        teal: '#2dd4bf',
        teal2: '#99f6e4',
      }
    },
  },
  plugins: [],
}
