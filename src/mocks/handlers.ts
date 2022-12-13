import { rest } from "msw";

import { backendApiUrl } from "../../api";

export const backendApiHandlers = [
  rest.get(`${backendApiUrl}/api/projects/:project_id/`, async (req, res, ctx) => {
    const textMessageLimit = req.url.searchParams.get("text_message_limit");
    const imageMessageLimit = req.url.searchParams.get("image_message_limit");

    // NOTE: copy from https://youngeek-0410.github.io/hacku-kosen-2022-backend/#/project/get_api_projects__project_id_
    const resBody = {
      project_id: "a38ioje",
      receiver_name: "山田 太郎",
      spotify_music: {
        uri: "uri:ljadjoihjgsadih",
        name: "ジョジョ~その血の運命~",
        external_url: "https://spotify.com/...",
        preview_url: "https://spotify.com/...",
        artist: {
          name: "富永TOMMY弘明",
          external_url: "https://spotify.com/...",
        },
        album: {
          name: "ジョジョ~その血の運命~",
          image_url: "https://spotify.com/...",
        },
      },
      text_messages: {
        count: textMessageLimit || 3,
        items: [
          {
            text: "おっつー",
            sender_name: "山田 圭祐",
          },
          {
            text: "おっつー",
            sender_name: "山田 圭祐",
          },
          {
            text: "おっつー",
            sender_name: "山田 圭祐",
          },
        ],
      },
      image_messages: {
        count: imageMessageLimit || 3,
        items: [
          {
            url: "https://via.placeholder.com/150",
            sender_name: "山田 圭祐",
          },
          {
            url: "https://via.placeholder.com/150",
            sender_name: "山田 圭祐",
          },
          {
            url: "https://via.placeholder.com/150",
            sender_name: "山田 圭祐",
          },
        ],
      },
    };
    return res(ctx.status(200), ctx.json(resBody));
  }),
  rest.get(`${backendApiUrl}/api/projects/:project_id/text_messages/`, (req, res, ctx) => {
    const resBody = {
      count: 5,
      items: [
        {
          text: "お疲れ",
          sender_name: "山田 圭祐",
        },
        {
          text: "お疲れ",
          sender_name: "山田 圭祐",
        },
        {
          text: "お疲れ",
          sender_name: "山田 圭祐",
        },
        {
          text: "お疲れ",
          sender_name: "山田 圭祐",
        },
        {
          text: "お疲れ",
          sender_name: "山田 圭祐",
        },
      ],
    };
    return res(ctx.status(200), ctx.json(resBody));
  }),
  rest.get(`${backendApiUrl}/api/projects/:project_id/image_messages/`, (req, res, ctx) => {
    const resBody = {
      count: 5,
      items: [
        {
          url: "https://via.placeholder.com/150",
          width: 150,
          height: 150,
          sender_name: "山田 圭祐",
        },
        {
          url: "https://via.placeholder.com/150",
          width: 150,
          height: 150,
          sender_name: "山田 圭祐",
        },
        {
          url: "https://via.placeholder.com/150",
          width: 150,
          height: 150,
          sender_name: "山田 圭祐",
        },
        {
          url: "https://via.placeholder.com/150",
          width: 150,
          height: 150,
          sender_name: "山田 圭祐",
        },
        {
          url: "https://via.placeholder.com/150",
          width: 150,
          height: 150,
          sender_name: "山田 圭祐",
        },
      ],
    };
    return res(ctx.status(200), ctx.json(resBody));
  }),
];
