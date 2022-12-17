import { styled } from "../stitches.config";

export const Base = styled("div", {
  width: "90%",
  margin: "0 auto",
  padding: "50px 0",

  "& h2": {
    fontSize: "2rem",
    fontWeight: "300",
    letterSpacing: "0.1rem",
    lineHeight: "1.5",
    display: "inline",
  },
  variants: {
    markerColor: {
      orange: {
        "& h2": {
          background: "linear-gradient(transparent 60%, $orange 0%)",
        },
      },
      red: {
        "& h2": {
          background: "linear-gradient(transparent 60%, $red 0%)",
        },
      },
      blue: {
        "& h2": {
          background: "linear-gradient(transparent 60%, $blue 0%)",
        },
      },
    },
  },
});
