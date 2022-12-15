import React from "react";

import { styled } from "../stitches.config";

export const Footer: React.FC = () => {
  return (
    <>
      <StyledFooter>
        <Senders>
          <h3>メッセージをくれた人たち</h3>
          <SenderNameList>
            <li>市古 空</li>
            <li>藤森和馬</li>
            <li>Michele Fanshaw</li>
            <li>佐川智嗣</li>
            <li>豊田伸</li>
            <li>Manuel Crimpe</li>
            <li>井沢愛香</li>
            <li>小倉紗穂里</li>
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
  width: "90%",
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
  borderTop: "1px solid $grey",
  margin: 0,
  padding: "8px 0",
  color: "$grey",
  textAlign: "center",
  fontSize: "12px",
});
