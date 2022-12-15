import { ImageMessage, Project, SpotifyMusic, TextMessage } from "../domain/type";

export const exampleImageMessages: ImageMessage[] = [
  {
    url: "https://via.placeholder.com/350x200",
    sender_name: "sora",
    height: 669,
    width: 1003,
  },
  {
    url: "https://via.placeholder.com/350x200",
    sender_name: "sora",
    height: 669,
    width: 1003,
  },
  {
    url: "https://via.placeholder.com/350x200",
    sender_name: "sora",
    height: 669,
    width: 1003,
  },
];

export const exampleTextMessages: TextMessage[] = [
  {
    text: "お疲れさまでした！とても頼りになりました！！",
    sender_name: "sora",
  },
  {
    text: "Thanks!!",
    sender_name: "いつき",
  },
  {
    text: "けいすーけです",
    sender_name: "山田圭介",
  },
];

export const exampleSpotifyMusic: SpotifyMusic = {
  uri: "spotify:album:6uqewERWZ1vzfCcin1zFIp",
};

export const exampleProject: Project = {
  project_id: "1ihF45s",
  receiver_name: "山田けいすけ",
  top_text: "こうよう祭お疲れ様でした！",
  top_image: {
    url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/1ihF45s/DSC_7191_qZby4Qz.JPG",
  },
  spotify_music: exampleSpotifyMusic,
  text_messages: {
    items: exampleTextMessages,
    count: exampleTextMessages.length,
  },
  image_messages: {
    items: exampleImageMessages,
    count: exampleImageMessages.length,
  },
};
