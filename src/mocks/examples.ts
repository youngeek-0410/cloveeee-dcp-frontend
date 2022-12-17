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
  project_id: "mxTaUJh",
  receiver_name: "加藤 愛斗",
  spotify_music: { uri: "spotify:album:6uqewERWZ1vzfCcin1zFIp" },
  top_text: "副実行委員長お疲れさまでした！！",
  top_image: { url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/4nMfzYF/124383.jpg" },
  text_messages: {
    items: [
      {
        text: "今回のこうよう祭のMVPは誰がなんと言おうと、まなとです！すべてのIT関係に、内務の仕事のお世話まで大車輪でしたね。いや〜ほんとおつかれさま。",
        sender_name: "先生",
      },
      {
        text: "まなと、副実行お疲れ様。頼りない実行委員長だったかもしれないけど、約9ヶ月間ついてきてくれてありがとう。俺からマナトを幹部に誘うって、たくさん仕事させちゃって、申し訳なく思っている。でも、マナトを誘って選んで後悔はないし、むしろめっちゃ感謝してる。まなとには本当に色々助けられたし、まなとなしには今年のこうよう祭は語れないな。まなとと一緒に幹部やれて心から良かったと思ったよ。最高の幹部でした。",
        sender_name: "実行委員長",
      },
      {
        text: "まなとさんお疲れさまです。まなとさんは常に仕事しているイメージで、でもどこか、余裕があるところがとても格好良かったです！来年のまなとさんポジションになる人が誰か楽しみです。まなとさんすごすぎて超える人いなさそうです...",
        sender_name: "けいいちろう",
      },
      {
        text: "まなとさん。副実行お疲れさまでした。普段のまなとさんと仕事モードのまなとさんの両方を近くで見ることが出来て、嬉しかったです。ギャップが凄くてもうすごかったです。初めて話したのが寮祭の内務のときで、話しやすい人だなと思っていましたが、こんなにかっこいいとは！！あの頃の自分に伝えてあげたいです。本当にありがとうございました。また話ましょう！！",
        sender_name: "ももか",
      },
      {
        text: "副実行お疲れ様。俺が寮祭で司会のときは色紙に「ほんとにお疲れ早く寝て」みたいなの書いてくれた気がするけど、今度はその何倍もまなとお疲れ様早く寝てって感じです。技術あって仕事できるくせに仕事しないキャラだったのに、今回はどこの場所でも一番仕事してるし、ずっと忙しそうでかっこよすぎて困ります。正直パートリーダーやるか迷ってたけど、まなとが直前に誘ってくれたおかげでやるって決心できたし、まなとのおかげでめちゃくちゃ楽しい思い出が出来ました。ありがとう。これからもよろしく。",
        sender_name: "ゆうせい",
      },
      {
        text: "まなとさん。今すぐに体を休めてください。大変です。体が腐りますよ。まなとさんは本当に尊敬できます。いつきが言っていたので断言できます。マナトさんには、日本は小さすぎるので、今すぐに世界に飛びましょう。",
        sender_name: "つばさ",
      },
      {
        text: "副実行お疲れさまでした！！最初のまなとさんの印象は怖い感じで近寄りにくい人だと思ってましたが、仕事で関わっていく中で、すごい真面目ですごい優しくて、すごいかっこいいって気づきました。本当に仕事もできるし、話してて楽しいし、大好きです！！たぶんこうよう祭始まって一番仲良く慣れた人です。嬉しいです！後最後に言いたいことあります！！こうよう祭終わったらゆっくり休んでください！！！ありがとうございました。",
        sender_name: "ひなた",
      },
      {
        text: "本当にありがとうございました。毎日授業後に1on1をしてもらってようやく形になりました。まなとがいなかったら、内務パートは崩壊していたでしょう。僕がパートリーダーとしてやっていくことが出来たのは、まなとに支えてもらったからです。システム作りをして、スポンサーを集めて、先生と戦って、広報パートも見て、内務のキャリーもする。すごすぎです。普通の人だとパンクして、死んでいたでしょう。これだけのことをやってくれてるまなとさんはカッコいいです！今度遊ぼう！",
        sender_name: "だいき",
      },
      {
        text: "二日目、まなとさんの目がパキパキすぎて、びっくりしました。何かに負けた後なのかと思いました。仕事をしているときのまなとさんは、本当に格好良くて、尊敬しています。こうよう祭が終わったら、目一杯遊びたいです。あと、〇〇さんにはもう少し優しくしてあげてください笑。まなとさんには、本当にお世話になりました。ありがとうございました。",
        sender_name: "ゆうた",
      },
    ],
    count: 9,
  },
  image_messages: {
    items: [
      {
        url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/mxTaUJh/124374.jpg",
        sender_name: "実行委員長",
        height: 1045,
        width: 1565,
      },
      {
        url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/mxTaUJh/124377.jpg",
        sender_name: "けいいちろう",
        height: 1045,
        width: 1565,
      },
      {
        url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/mxTaUJh/124379.jpg",
        sender_name: "先生",
        height: 1045,
        width: 1565,
      },
      {
        url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/mxTaUJh/124378.jpg",
        sender_name: "ももか",
        height: 1045,
        width: 1565,
      },
      {
        url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/mxTaUJh/124376.jpg",
        sender_name: "ゆうせい",
        height: 1045,
        width: 1565,
      },
      {
        url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/mxTaUJh/DSC_6137.JPG",
        sender_name: "つばさ",
        height: 4016,
        width: 6016,
      },
      {
        url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/mxTaUJh/124382.jpg",
        sender_name: "ひなた",
        height: 1045,
        width: 1565,
      },
      {
        url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/mxTaUJh/124375.jpg",
        sender_name: "だいき",
        height: 1045,
        width: 1565,
      },
      {
        url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/mxTaUJh/124381.jpg",
        sender_name: "ゆうた",
        height: 1045,
        width: 1565,
      },
    ],
    count: 9,
  },
};
