import React from "react";

import { Project } from "./domain/type";
import { HeroPart } from "./HeroPart/HeroPart";

type Props = {
  project: Project;
};

const RootContainer: React.FC<Props> = ({ project }) => {
  return <Root project={project} />;
};

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
