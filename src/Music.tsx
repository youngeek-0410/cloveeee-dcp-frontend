import React from "react";

import { styled } from "./stitches.config";
import { Base } from "./utils/ui";

export const Music: React.FC = () => {
  return (
    <Base>
      <h2>
        思い出の
        <br />
        音楽
      </h2>

      <p>再生ボタンを押すと音楽を聴くことができます</p>
      <TmpMusicPlayer src="https://via.placeholder.com/350x200" alt="" />
    </Base>
  );
};

const TmpMusicPlayer = styled("img", {
  display: "block",
  width: "100%",
  marginTop: "20px",
});
