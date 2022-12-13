import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";

import { FirstLoadView } from "./common/FirstLoadView/FirstLoadView";
import { Project } from "./domain/type";
import { HeroPart } from "./HeroPart/HeroPart";
import { styled } from "./stitches.config";

type Props = {
  project: Project;
};

const RootContainer: React.FC<Props> = ({ project }) => {
  const [isFirstLoadCompoleted, setIsFirstLoadCompleted] = useState(false);
  const mainPartControls = useAnimationControls();
  const onFirstLoadComplete = () => {
    setIsFirstLoadCompleted(true);
  };

  useEffect(() => {
    // NOTE: render直後に実行したい
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
        <MainPart
          animate={mainPartControls}
          style={{ opacity: 0, overflow: "hidden" }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <Root project={project} />
        </MainPart>
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
const MainPart = motion(styled("div", {}));

export default RootContainer;

const Root: React.FC<Props> = ({ project }) => {
  const senderNameList = project.text_messages.items.map((message) => message.sender_name);
  return (
    <HeroPart
      receiverName={project.receiver_name}
      topText={project.top_text}
      topImage={project.top_image}
      senderNameList={senderNameList}
    />
  );
};
