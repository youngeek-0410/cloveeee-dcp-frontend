import { motion, useAnimationControls } from "framer-motion";
import React from "react";
import Typed from "react-typed";

import { styled } from "../../stitches.config";

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
      <Typed strings={[`${receiverName}さんへ`]} typeSpeed={150} startDelay={100} onComplete={onTypeComplete} />
      <motion.p
        style={{ opacity: 0 }}
        animate={pControls}
        transition={{
          duration: 1.3,
          delay: 0.5,
        }}
      >
        Presents by Cloveeee.
      </motion.p>
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
