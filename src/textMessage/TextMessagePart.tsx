import React from "react";

import { TextMessage } from "../domain/type";
import { styled } from "../stitches.config";
import { Base } from "../utils/ui";

export const TextMessagePart: React.FC<{ textMessages: TextMessage[] }> = ({ textMessages }) => {
  return (
    <Base markerColor="blue">
      <h2>
        あなたへ
        <br />
        のメッセージ
      </h2>
      {textMessages.map((textMessage, i) => {
        return (
          <MessageItem key={i}>
            <p>{textMessage.text}</p>
            <p>{textMessage.sender_name}</p>
          </MessageItem>
        );
      })}
    </Base>
  );
};

const MessageItem = styled("div", {
  margin: "16px 0",
  padding: "8px 4px",
  border: "1px solid #666666",
  "& p": {},
});
