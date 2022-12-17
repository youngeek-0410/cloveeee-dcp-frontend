import React from "react";

import { Image } from "../domain/type";
import { styled } from "../stitches.config";
import { Base } from "../utils/ui";

export const LeadTextPart: React.FC<{ topImage: Image }> = ({ topImage }) => {
  return (
    <OriginalBase>
      <h2>
        ここは
        <br />
        あなただけの
        <br />
        Webサイトです
      </h2>
      <div>
        <p>このサイトはあなたへの感謝の言葉や思い出が詰まった世界でたった一つしかないあなただけのWebサイトです</p>
      </div>

      <UserImage src={topImage.url} alt="" />
    </OriginalBase>
  );
};

const OriginalBase = styled(Base, {
  paddingTop: "100px",
  paddingBottom: "200px",
  position: "relative",
  div: {
    width: "75%",
    maxWidth: "250px",
  },
  h2: {
    position: "relative",
    top: "-80px",
  },
  p: {
    display: "inline",
    background: "rgba(255, 255, 255, 0.7)",
    lineHeight: "1.7",
  },
});

const UserImage = styled("img", {
  position: "absolute",
  top: "0",
  zIndex: "-1",
  transform: "translate(88px, 134px)",
  display: "block",
  width: "100%",
  marginTop: "20px",
  maxWidth: "400px",
  opacity: "0.9",
});
