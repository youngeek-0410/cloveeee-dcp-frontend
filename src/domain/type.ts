// TODO: api schema に合わせる形で snake_case になっているが、本当はcamelCaseにしたい

export type Project = {
  project_id: string;
  receiver_name: string;
  spotify_music: SpotifyMusic;
  top_text: string;
  top_image: Image;
  text_messages: {
    count: number;
    items: TextMessage[];
  };
  image_messages: {
    count: number;
    items: ImageMessage[];
  };
};

export type TextMessage = {
  text: string;
  sender_name: string;
};

// TODO: 本当は { image: Image; } としたい
export type ImageMessage = {
  sender_name: string;
} & Image;

export type Image = {
  url: string;
  width?: number;
  height?: number;
};

export type SpotifyMusic = {
  uri: string; // Spotifyサービス上での楽曲識別子
};
