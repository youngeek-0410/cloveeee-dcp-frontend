import React from "react";

import { styled } from "../stitches.config";
import { Base } from "../utils/ui";

export const TextMessage: React.FC = () => {
  return (
    <Base markerColor="blue">
      <h2>
        あなたへの
        <br />
        メッセージ
      </h2>
      <MessageItem>
        <p>本当にお疲れ様でした！めちゃくちゃかっこよかったです！</p>
        <p>市古より</p>
      </MessageItem>
      <MessageItem>
        <p>本当にお疲れ様でした！めちゃくちゃかっこよかったです！</p>
        <p>市古より</p>
      </MessageItem>
      <MessageItem>
        <p>本当にお疲れ様でした！めちゃくちゃかっこよかったです！</p>
        <p>市古より</p>
      </MessageItem>
    </Base>
  );
};

const MessageItem = styled("div", {
  margin: "16px 0",
  padding: "8px 4px",
  border: "1px solid #666666",
  "& p": {},
});
