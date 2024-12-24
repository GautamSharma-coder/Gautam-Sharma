/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this to scan your React files for Tailwind classes
  ],
  theme: {
    extend: {}, // Add custom configurations here if needed
  },
  plugins: [],
};
