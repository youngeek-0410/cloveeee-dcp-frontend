import { motion, useAnimationControls } from "framer-motion";
import React from "react";
import Typed from "react-typed";

import { styled } from "../stitches.config";

type Props = {
  receiverName: string;
  onLoadComplete?: () => void;
};

export const FirstLoadView: React.FC<Props> = ({ receiverName, onLoadComplete }) => {
  const pControls = useAnimationControls();
  const baseControls = useAnimationControls();
  const onTypeComplete = async () => {
    await pControls.start({
      opacity: 1,
    });
    await baseControls.start({
      opacity: 0,
    });
    onLoadComplete?.();
  };

  return (
    <Base
      animate={baseControls}
      transition={{
        duration: 1.5,
        delay: 1,
      }}
    >
      <ReceiverName strings={[`${receiverName}さんへ`]} typeSpeed={130} startDelay={10} onComplete={onTypeComplete} />
      <PresentsBy
        style={{ opacity: 0 }}
        animate={pControls}
        transition={{
          duration: 1.3,
          delay: 0.5,
        }}
      >
        <p>presents by</p>
        <img src="https://res.cloudinary.com/drb9hgnv3/image/upload/v1671063427/logo_pcmicx.svg" alt="" />
      </PresentsBy>
    </Base>
  );
};

const Base = motion(
  styled("div", {
    height: "100svh",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    letterSpacing: "0.1em",
  })
);

const ReceiverName = styled(Typed, {
  fontSize: "2.0rem",
  fontWeight: "300",
});

const PresentsBy = styled(motion.div, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "16px",
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
