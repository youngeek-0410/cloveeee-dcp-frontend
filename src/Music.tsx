import React from "react";

import { styled } from "./stitches.config";

export const Music: React.FC = () => {
  return (
    <Base>
      <h2>
        思い出の
        <br />
        音楽
      </h2>

      <p>再生ボタンを押すと音楽を聴くことができます</p>
      <img src="https://via.placeholder.com/350x200" alt="" />
    </Base>
  );
};

const Base = styled("div", {
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
  "& img": {
    display: "block",
    width: "100%",
    marginTop: "20px",
  },
});
