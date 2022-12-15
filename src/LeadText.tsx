import React from "react";

import { styled } from "./stitches.config";

export const LeadText: React.FC = () => {
  return (
    <Base>
      <h2>
        あなただけの
        <br />
        世界でたった1つだけの
        <br />
        Webサイト
      </h2>
      <p>
        このサイトはあなたへの感謝の言葉や思い出がたくさん詰まった世界でたった一つしかないのあなただけのWebサイトです
      </p>

      {/* TODO: ユーザ投稿の写真を入れる？ */}
      <img src="https://via.placeholder.com/350x200" alt="" />
    </Base>
  );
};

const Base = styled("div", {
  width: "95%",
  margin: "0 auto",
  padding: "0 0 600px",

  "& h2": {
    fontSize: "2.5rem",
    fontWeight: "300",
    letterSpacing: "0.1rem",
    lineHeight: "1.5",
  },

  "& img": {
    display: "block",
    width: "100%",
    marginTop: "20px",
  },
});
