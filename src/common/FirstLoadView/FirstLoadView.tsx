import React from "react";
import Typed from "react-typed";

import { styled } from "../../stitches.config";

type Props = {
  receiverName: string;
};
export const FirstLoadView: React.FC<Props> = ({ receiverName }) => {
  return (
    <Base>
      <Typed strings={[`${receiverName}さんへ`]} typeSpeed={110} startDelay={100} />
      <p>Presents by Cloveeee</p>
    </Base>
  );
};

const Base = styled("div", {
  height: "100svh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
