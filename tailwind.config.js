/**@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        tinqfiYellow: "#FCAD2A",
        tinqfiGrey: "#F2F2F7",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(252, 173, 42, 0.5)",
        "2xl":
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      },
    },
  },
  plugins: [],
};
