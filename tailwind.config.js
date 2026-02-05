/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette fitting "Argentina" + Tech (Blue/Sky/White/Black/Slate)
        // Avoiding Violet/Pink
        corporate: {
          dark: '#0f172a',  // Slate 900
          blue: '#1e40af',  // Blue 800
          sky: '#38bdf8',   // Sky 400
          light: '#f8fafc', // Slate 50
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
