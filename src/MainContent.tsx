import React from "react";

import { Header } from "./common/Header";
import { LeadText } from "./leadText/LeadText";
import { MemorialMusic } from "./memorialMusic/MemorialMusic";
import { MemorialPhoto } from "./memorialPhoto/MemorialPhoto";
import { Footer } from "./common/Footer";
import { TextMessage } from "./textMessage/TextMessage";

export const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <LeadText />
      <MemorialMusic />
      <MemorialPhoto />
      <TextMessage />
      <Footer />
    </>
  );
};
