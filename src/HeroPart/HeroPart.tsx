import React from "react";

import { Image } from "../domain/type";

type Props = {
  receiverName: string;
  topText: string;
  topImage: Image;
  senderNameList: string[];
};
export const HeroPart: React.FC<Props> = ({ receiverName, topText, topImage, senderNameList }) => {
  return (
    <div>
      <p>{receiverName}さん</p>
      <img src={topImage.url} alt="一番の思い出写真" />
      <p>{topText}</p>
      <div>
        <p>
          {senderNameList.map((senderName, i) => (
            <span key={i}>{senderName}</span>
          ))}
          より
        </p>
      </div>
    </div>
  );
};
