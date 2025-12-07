// tailwind.config.js
module.exports = {
  darkMode: "class", // important for dark mode toggle
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e85d04', // orange-ish for primary light mode
          content: '#fff',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        mydark: {
          primary: "#e85d04",
          "primary-content": "#fff",
          // rest color overrides...
          "base-100": "#121212",
          "base-900": "#0a0a0a",
        },
      },
    ],
  },
};
