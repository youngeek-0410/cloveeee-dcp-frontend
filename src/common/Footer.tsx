import React from "react";

import { TextMessage } from "../domain/type";
import { styled } from "../stitches.config";

export const Footer: React.FC<{ textMessages: TextMessage[] }> = ({ textMessages }) => {
  return (
    <>
      <StyledFooter>
        <Senders>
          <h3>メッセージをくれた人たち</h3>
          <SenderNameList>
            {textMessages.map((textMessage, i) => {
              return <li key={i}>{textMessage.sender_name}</li>;
            })}
          </SenderNameList>
        </Senders>
        <Copyright>
          {" "}
          Copyright 2022 powered by{" "}
          <a href="https://cloveeee.com" target="_blanck" rel="noopener noreferrer">
            Cloveeee
          </a>
          .
        </Copyright>
      </StyledFooter>
    </>
  );
};

const StyledFooter = styled("footer", {
  margin: 0,
});

const Senders = styled("div", {
  width: "95%",
  margin: "0 auto 20px",
  h3: {
    fontSize: "1.5rem",
    fontWeight: "300",
    letterSpacing: "0.1rem",
    lineHeight: "1.5",
    display: "inline",
    background: "linear-gradient(transparent 60%, $green 0%)",
  },
});

const SenderNameList = styled("ul", {
  display: "flex",
  width: "80%",
  flexWrap: "wrap",
  listStyle: "none",
  margin: "0",
  padding: "10px 0",
  position: "relative",
  "& li": {
    marginRight: "10px",
    padding: "0",
  },
});

const Copyright = styled("p", {
  borderTop: "1px solid $gray",
  margin: 0,
  padding: "8px 0",
  color: "$gray",
  textAlign: "center",
  fontSize: "12px",
});
