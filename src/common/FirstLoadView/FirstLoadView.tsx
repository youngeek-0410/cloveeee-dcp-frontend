import React from "react";

type Props = {
  receiverName: string;
};
export const FirstLoadView: React.FC<Props> = ({ receiverName }) => {
  return <div>{receiverName}</div>;
};
