import React from "react";

import { SpotifyMusic } from "../domain/type";
import { styled } from "../stitches.config";
import { Base } from "../utils/ui";

import { MusicPlayground } from "./MusicPlayground";

export const MemorialMusicPart: React.FC<{ spotifyMusic: SpotifyMusic }> = ({ spotifyMusic }) => {
  return (
    <Base markerColor="orange">
      <h2>
        思い出の
        <br />
        音楽
      </h2>

      <p>
        あなたと聴いた思い出の曲です
        <br />
        再生ボタンを押すと音楽を聴くことができます
      </p>
      <MusicPlayground spotifyMusic={spotifyMusic} />
    </Base>
  );
};

const TmpMusicPlayer = styled("img", {
  display: "block",
  width: "100%",
  marginTop: "20px",
});
