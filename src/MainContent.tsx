import React from "react";

import { Header } from "./header/Header";
import { LeadText } from "./leadText/LeadText";
import { MemorialMusic } from "./memorialMusic/MemorialMusic";
import { MemorialPhoto } from "./memorialPhoto/MemorialPhoto";

export const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <LeadText />
      <MemorialMusic />
      <MemorialPhoto />
    </>
  );
};
