module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: { 500: "#243831", 300: "#2B5F44", 100: "#D8E9E4" },
        golden: "#C5A365",
        grey: {
          300: "#939494",
          100: "#BBC2C0",
        },
      },
    },
  },
  plugins: [],
};
