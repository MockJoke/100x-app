/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      chirp: ["Chirp", "sans-serif"],
    },

    colors: {
      "transparent" : "transparent",
      "twitter-blue-default" : "#1D9BF0",
      "twitter-blue-hover" : "#1871CA",
      "twitter-blue-disabled" : "#1E5D87",
      "blue-wash" : "75BEEF",
      "button-stroke" : "#546A7A",
      "searchbar-fill" : "#212327",
      "card-fill" : "#16181C",
      success : "#00BE74",
      error : "#8B141A",
      "background-color" : "#040404",
      "stroke-border": "var(--stroke, rgba(29, 155, 240, 0.24))",

      neutral : {
        50: "#F9F9F9",
        100: "#F4F4F4",
        200: "#E4E4E4",
        300: "#D3D3D3",
        400: "#A2A2A2",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0A0A0A",
        1000: "#000000"
      }
    },

    extend: {
      boxShadow: {
        'inner-lg': '0 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },

      borderRadius: {
        '4xl': '30px',
        '8xl': '65px'
      },

      width: {
        '84': '334px',
        '88': '348px',
        '100': '426px',
        '105': '434px',
        '110': '442px',
        '172': '598px',
      },

      height: {
        '0.75': '3px',
        '9.5': '38px',
        '9.55': '39px',
        '15': '58px'
      },

      borderWidth: {
        '1': '1px',
        '3': '3px'
      },

      spacing: {
        '3.75' : '15px',
        '23': '93px'
      }
    },
  },
  plugins: [],
}

