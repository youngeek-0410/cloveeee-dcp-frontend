import React from "react";

import { Header } from "./header/Header";
import { LeadText } from "./leadText/LeadText";
import { MemorialMusic } from "./MemorialMusic/MemorialMusic";

export const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <LeadText />
      <MemorialMusic />
    </>
  );
};
