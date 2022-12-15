import React from "react";

import { ImageMessage } from "../domain/type";
import { styled } from "../stitches.config";
import { Base } from "../utils/ui";

export const MemorialPhotoPart: React.FC<{ photos: ImageMessage[] }> = ({ photos }) => {
  return (
    <Base markerColor="red">
      <h2>
        思い出の
        <br />
        写真
      </h2>
      <p>あなたと一緒に過ごした日々が残っています</p>
      {photos.map((photo, i) => {
        return <TmpPhoto key={i} src={photo.url} alt="" />;
      })}
    </Base>
  );
};

const TmpPhoto = styled("img", {
  display: "block",
  width: "100%",
  marginTop: "20px",
});
