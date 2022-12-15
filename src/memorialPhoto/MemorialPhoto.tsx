import React from "react";

import { styled } from "../stitches.config";
import { Base } from "../utils/ui";

export const MemorialPhoto: React.FC = () => {
  return (
    <Base markerColor="red">
      <h2>
        思い出の
        <br />
        写真
      </h2>
      <p>あなたと一緒に過ごした日々が残っています</p>
      <TmpPhoto src="https://via.placeholder.com/350x200" alt="" />
      <TmpPhoto src="https://via.placeholder.com/350x200" alt="" />
      <TmpPhoto src="https://via.placeholder.com/350x200" alt="" />
    </Base>
  );
};

const TmpPhoto = styled("img", {
  display: "block",
  width: "100%",
  marginTop: "20px",
});
