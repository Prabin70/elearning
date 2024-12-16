/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in the src folder
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include App Router files
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include component files
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Include Page Router files
  ],
  theme: {
    extend: {
      fontFamily: {
        Mysuru: "Mysuru",
      },
    },
  },
  plugins: [],
};
