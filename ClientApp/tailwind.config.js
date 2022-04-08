module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "landing-img":
          "url('https://images.unsplash.com/photo-1590496794008-383c8070b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1691&q=80')",
      },
      fontFamily: {
        Robo: ["Roboto"],
      },
      fontSize: {
        tiny: "0.7rem",
      },
      colors: {
        teal: "#00D1C1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
