import React from "react";

import { Header } from "./Header";
import { LeadText } from "./LeadText";
import { Music } from "./Music";

export const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <LeadText />
      <Music />
    </>
  );
};
