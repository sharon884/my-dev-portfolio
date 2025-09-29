/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL FIX: darkMode is correctly set to 'class'
  darkMode: 'class', 
  
  content: [
    // 💡 ADD THIS LINE 💡 to ensure globals.css custom classes/keyframes are scanned
    './app/globals.css', 
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // ... rest of the theme extension ...
  },
  plugins: [],
}