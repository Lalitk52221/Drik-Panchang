/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-outline': '0 0 0 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
