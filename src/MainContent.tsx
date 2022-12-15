import React from "react";

import { Header } from "./common/Header";
import { LeadText } from "./leadText/LeadText";
import { MemorialMusic } from "./memorialMusic/MemorialMusic";
import { MemorialPhoto } from "./memorialPhoto/MemorialPhoto";
import { TextMessage } from "./textMessage/textMessage";
import { Footer } from "./common/Footer";

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
