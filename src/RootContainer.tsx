import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";

import { FirstLoadView } from "./common/firstLoadView/FirstLoadView";
import { Project } from "./domain/type";
import { MainContent } from "./MainContent";
import { styled } from "./stitches.config";

type Props = {
  project: Project;
};

export const RootContainer: React.FC<Props> = ({ project }) => {
  const [isFirstLoadCompoleted, setIsFirstLoadCompleted] = useState(false);
  const mainPartControls = useAnimationControls();
  const onFirstLoadComplete = () => {
    setIsFirstLoadCompleted(true);
  };

  useEffect(() => {
    // NOTE: first loading 直後に実行したい
    mainPartControls.start({
      opacity: 1,
    });
  }, [isFirstLoadCompoleted, mainPartControls]);

  return (
    <>
      {!isFirstLoadCompoleted ? (
        <FirstLoadPart>
          <FirstLoadView receiverName={project.receiver_name} onLoadComplete={onFirstLoadComplete} />
        </FirstLoadPart>
      ) : (
        <motion.div
          animate={mainPartControls}
          style={{ opacity: 0, overflow: "hidden" }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <MainContent project={project} />
        </motion.div>
      )}
    </>
  );
};

const FirstLoadPart = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,

  width: "100vw",
  height: "100vh",
});
