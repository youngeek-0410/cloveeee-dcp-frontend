import React from "react";

import { SpotifyMusic } from "../domain/type";

type Props = {
  spotifyMusic: SpotifyMusic;
};

export const MusicPlayground: React.FC<Props> = ({ spotifyMusic }) => {
  const urlKey = spotifyMusic.uri.split(":")[2];
  const embedLink = `https://open.spotify.com/embed/track/${urlKey}?utm_source=generator`;
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={embedLink}
      width="100%"
      height="240"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};
