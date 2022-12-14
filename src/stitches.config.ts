import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      textPrimary: "#333333",
      backgroundPrimary: "#f5f4e9",
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
});
