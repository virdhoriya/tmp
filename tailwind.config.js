/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'lg': { max: "64em" },
        'md': { max: "47.93em" },
      },
    },
  },
  plugins: [],
};
