import React from "react";

import { Header } from "./common/Header";
import { LeadTextPart } from "./leadText/LeadTextPart";
import { MemorialMusicPart } from "./memorialMusic/MemorialMusicPart";
import { MemorialPhotoPart } from "./memorialPhoto/MemorialPhotoPart";
import { Footer } from "./common/Footer";
import { TextMessagePart } from "./textMessage/TextMessagePart";
import { Project } from "./domain/type";

export const MainContent: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      <Header topText={project.top_text} receiverName={project.receiver_name} />
      <LeadTextPart photoUrl={project.image_messages.items} />
      <MemorialMusicPart spotifyMusic={project.spotify_music} />
      <MemorialPhotoPart photos={project.image_messages.items} />
      <TextMessagePart textMessages={project.text_messages.items} />
      <Footer textMessages={project.text_messages.items} />
    </>
  );
};
