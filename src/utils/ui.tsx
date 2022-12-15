import { styled } from "../stitches.config";

export const Base = styled("div", {
  width: "95%",
  margin: "0 auto",
  padding: "60px 0",

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
          background: "linear-gradient(transparent 60%, #ffdcb8 0%)",
        },
      },
      red: {
        "& h2": {
          background: "linear-gradient(transparent 60%, #ffb8b8 0%)",
        },
      },
      blue: {
        "& h2": {
          background: "linear-gradient(transparent 60%, #b8f7ff 0%)",
        },
      },
    },
  },
});
