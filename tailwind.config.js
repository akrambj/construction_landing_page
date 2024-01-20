/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#3D6E3F",
        "yellow-primary": "#F2AF37",
        gray: "#404040",
      },
      backgroundColor: {
        "green-primary": "#3D6E3F",
        "yellow-primary": "#F2AF37",
        "gray-primary": "#404040",
      },
    },
  },
  plugins: [],
};
