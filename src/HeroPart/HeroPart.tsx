import React from "react";

import { styled } from "../stitches.config";

type Props = {
  receiverName: string;
};

/*
 * ページのHero partに当たり、
 * FirstLoadView の直後に表示される
 *
 * Viewport いっぱいに表示される
 */
export const HeroPart: React.FC<Props> = ({ receiverName }) => {
  // WIP: デザインむずすぎたので一旦保留
  // NOTE: 出来るだけ普遍的なデザインにしたい（初手で目に入るコンテンツがユーザ投稿依存になるのはリスクが高い）
  return (
    <Base>
      <h1>{receiverName}さんへ</h1>
    </Base>
  );
};

const Base = styled("div", {
  background: "#ffb876f5",
  height: "100svh",
  paddingLeft: "16px",
  display: "flex",
  alignItems: "center",
});
