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
    background: "linear-gradient(transparent 60%, #ffdcb8 0%)",
  },
});
