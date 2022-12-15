import { ImageMessage, Project, SpotifyMusic, TextMessage } from "../domain/type";

export const exampleImageMessages: ImageMessage[] = [
  {
    url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/1ihF45s/DSC_7191_qZby4Qz.JPG",
    sender_name: "sora",
    height: 669,
    width: 1003,
  },
  {
    url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/1ihF45s/DSC_7190_Kth8Bsw.JPG",
    sender_name: "sora",
    height: 669,
    width: 1003,
  },
  {
    url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/1ihF45s/DSC_7191.JPG",
    sender_name: "いつき",
    height: 669,
    width: 1003,
  },
  {
    url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/1ihF45s/DSC_7190.JPG",
    sender_name: "いつき",
    height: 669,
    width: 1003,
  },
];

export const exampleTextMessages: TextMessage[] = [
  {
    text: "Great Job",
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
  {
    text: "けいすーけです",
    sender_name: "山田圭介",
  },
  {
    text: "けいすーけです",
    sender_name: "山田圭介",
  },
  {
    text: "けいすーけです",
    sender_name: "山田圭介",
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
  receiver_name: "manato",
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
