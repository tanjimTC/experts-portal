module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      fontFamily: {
        primary: ["sans-serif", "Montserrat"],
        secondary: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#267AE9",
        textColor: "#232323",
        textColor2: "#4d4f5c",
        textColor3: "#433F7F",
        footerColor: "#161927",
        overlay: "#050D33",
        circleColor: "#FEF8F1",
        sectionBG: "#F3F3F3",
        connectedBG: "#001e68",
        aboutusCardBG: "#fef8f1",
        heroBG: "#242348",
        careerSectionBG: "#efefef",
        policyListBG: "#e9e2e0",
        iconColor: "#A5A4BF",
        primaryBG: "#F0F0F7",
        btnColor1: "#3C85FB",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      spacing: {
        550: "550px",
      },
      height: {
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },
      minHeight: {
        "350px": "350px",
        "380px": "380px",
        "460px": "460px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
