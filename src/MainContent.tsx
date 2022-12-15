import React from "react";

import { Header } from "./header/Header";
import { LeadText } from "./leadText/LeadText";
import { Music } from "./music/Music";

export const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <LeadText />
      <Music />
    </>
  );
};
