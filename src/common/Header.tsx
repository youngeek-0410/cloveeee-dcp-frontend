import React from "react";

// import { Project } from "../domain/type";
import { styled } from "../stitches.config";

export const Header: React.FC<{ topText: string; receiverName: string }> = ({ topText, receiverName }) => {
  return (
    <header>
      <BackgroundImage style={{ backgroundImage: topText }}></BackgroundImage>
      <Texts>
        <div>
          <ReceiverName>{receiverName}さんへ</ReceiverName>
          <TopText>{topText}</TopText>
          <PresentsBy>
            <p>presents by </p>
            <img src="https://res.cloudinary.com/drb9hgnv3/image/upload/v1671063427/logo_pcmicx.svg" alt="" />
          </PresentsBy>
        </div>
      </Texts>
    </header>
  );
};

const BackgroundImage = styled("div", {
  width: "100%",
  height: "50vh",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1645075960701-573cbc669de6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80')",
  backgroundSize: "cover",
});

const TopText = styled("p", {
  fontSize: "16px",
  fontWeight: "300",
  letterSpacing: "0.1rem",
  display: "inline",
});

const Texts = styled("div", {
  height: "50vh",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& *": {
    position: "relative",
    top: "-15px",
  },
});

const ReceiverName = styled("h1", {
  fontSize: "2rem",
  fontWeight: "300",
  letterSpacing: "0.1rem",
});

const PresentsBy = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "30px",
  letterSpacing: "0.1rem",
  "& p": {
    fontStyle: "italic",
    fontSize: "1rem",
    fontWeight: "300",
    marginRight: "10px",
  },
  "& img": {
    width: "40px",
  },
});
