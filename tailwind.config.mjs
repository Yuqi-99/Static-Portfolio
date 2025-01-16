/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

function half(value) {
  return value.replace(/\d+(.\d+)?/, (number) => number / 2);
}

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["serif"],
      mono: ["RobotoMono", "monospace"],
      wendyOne: ["Wendy One", "sans-serif"],
      signikaNegativeSC: ["Signika Negative SC", "sans-serif"],
    },
    extend: {
      minHeight: {
        screen: ["100vh /* fallback for Opera, IE and etc. */", "100dvh"],
      },
      colors: {
        "green-light": "#EAF9F2",
        "green-lightHover": "#D9EAE4",
        "green-lightActive": "#B0D4C6",
        "green-normal": "#0CC17E",
        "green-normalHover": "#007348",
        "green-normalActive": "#005C3A",
        "green-dark": "#005636",
        "green-darkHover": "#00452B",
        "green-darkActive": "#003420",
        "green-darker": "#002819",

        "grey-light": "#F8F8F9",
        "grey-lightHover": "#F4F5F6",
        "grey-lightActive": "#E1E5EC",
        "grey-normal": "#B6BCC6",
        "grey-normalHover": "#A4A9B2",
        "grey-normalActive": "#92969E",
        "grey-dark": "#898D95",
        "grey-darkHover": "#6D7177",
        "grey-darkActive": "#525559",
        "grey-darker": "#404245",

        "blue-light": "#E6F3FF",
        "blue-lightHover": "#D9EDFF",
        "blue-lightActive": "#B0DAFF",
        "blue-normal": "#0087FF",
        "blue-normalHover": "#007AE6",
        "blue-normalActive": "#006CCC",
        "blue-dark": "#0065BF",
        "blue-darkHover": "#005199",
        "blue-darkActive": "#003D73",
        "blue-darker": "#002F59",

        "yellow-light": "#FEF5EA",
        "yellow-lightHover": "#FDF0E0",
        "yellow-lightActive": "#FBDFBF",
        "yellow-normal": "#F2992F",
        "yellow-normalHover": "#DA8A2A",
        "yellow-normalActive": "#C27A26",
        "yellow-dark": "#B67323",
        "yellow-darkHover": "#965C1C",
        "yellow-darkActive": "#6D4515",
        "yellow-darker": "#553610",

        "darkGrey-light": "#EAEAEA",
        "darkGrey-lightHover": "#E0E0E0",
        "darkGrey-lightActive": "#BFBFBF",
        "darkGrey-normal": "#2F2F2F",
        "darkGrey-normalHover": "#2A2A2A",
        "darkGrey-normalActive": "#262626",
        "darkGrey-dark": "#232323",
        "darkGrey-darkHover": "#1C1C1C",
        "darkGrey-darkActive": "#151515",
        "darkGrey-darker": "#101010",

        "red-light": "#FFEFEF",
        "red-lightHover": "#FEE7E7",
        "red-lightActive": "#FDCDCD",
        "red-normal": "#FA5E5E",
        "red-normalHover": "#E15555",
        "red-normalActive": "#C84B4B",
        "red-dark": "#BC4747",
        "red-darkHover": "#963838",
        "red-darkActive": "#702A2A",
        "red-darker": "#582121",

        "purple-light": "#F6EDFF",
        "purple-lightHover": "#F2E4FF",
        "purple-lightActive": "#E3C8FF",
        "purple-normal": "#A54DFF",
        "purple-normalHover": "#9545E6",
        "purple-normalActive": "#843ECC",
        "purple-dark": "#7C3ABF",
        "purple-darkHover": "#632E99",
        "purple-darkActive": "#4A2373",
        "purple-darker": "#3A1B59",

        "lightBlue-light": "#EEFAFB",
        "lightBlue-lightHover": "#E5F8F9",
        "lightBlue-lightActive": "#C9F0F2",
        "lightBlue-normal": "#51CDD5",
        "lightBlue-normalHover": "#49B9C0",
        "lightBlue-normalActive": "#41A4AA",
        "lightBlue-dark": "#3D9AA0",
        "lightBlue-darkHover": "#317B80",
        "lightBlue-darkActive": "#245C60",
        "lightBlue-darker": "#1C484B",
      },
      screens: {
        xs: "390px",
        sm: "641px",
        lg: "1025px",
        tablet: "641px",
        desktop: "1025px",
      },
      transitionProperty: {
        select: "max-height padding",
      },
      spacing: {
        15: "3.75rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-touch")(),
    plugin(({ addUtilities, e, theme, variants }) => {
      Object.entries(theme("gap")).forEach(([key, value]) =>
        addUtilities(
          {
            [`.flex-gap-${e(key)}`]: {
              margin: `-${half(value)}`,
              "& > *": {
                margin: half(value),
              },
            },
            [`.flex-gap-x-${e(key)}`]: {
              marginRight: `-${half(value)}`,
              marginLeft: `-${half(value)}`,
              "& > *": {
                marginRight: half(value),
                marginLeft: half(value),
              },
            },
            [`.flex-gap-y-${e(key)}`]: {
              marginTop: `-${half(value)}`,
              marginBottom: `-${half(value)}`,
              "& > *": {
                marginTop: half(value),
                marginBottom: half(value),
              },
            },
          },
          variants("gap")
        )
      );
    }),
  ],
};
