import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      textPrimary: "#333333",
      backgroundPrimary: "#f5f4e9",
      linkPrimary: "#a0834e",
      grey: "#999999",
      orange: "#ffdcb8",
      red: "#ffb8b8",
      blue: "#b8f7ff",
      green: "#b8ffc7",
    },
    fonts: {
      primary: "Lato, sans-serif",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
  },
  utils: {},
});

export const globalStyles = globalCss({
  body: {
    margin: 0,
    backgroundColor: "$backgroundPrimary",
    color: "$textPrimary",
    fontFamily: "$primary",
  },
  a: {
    color: "$linkPrimary",
    textDecoration: "none",
  },
});
