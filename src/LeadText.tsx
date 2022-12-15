import React from "react";

import { styled } from "./stitches.config";
import { Base } from "./utils/ui";

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
      <UserImage src="https://via.placeholder.com/350x200" alt="" />
    </Base>
  );
};

const UserImage = styled("img", {
  display: "block",
  width: "100%",
  marginTop: "20px",
});
