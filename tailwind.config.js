import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        inter: "'Inter', sans-serif",
        homic: "'Homemade Apple', cursive",
        sacramento: "'Sacramento', cursive"
      },
      screens: {
        'phone': '420px',
        'tablet': '600px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
    plugins: [],
  }
})