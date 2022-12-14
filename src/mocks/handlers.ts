import { rest } from "msw";

import { backendApiUrl } from "../utils/apiUrl";

import { exampleImageMessages, exampleTextMessages } from "./examples";

export const backendApiHandlers = [
  // rest.get(`${backendApiUrl}/api/projects/:project_id/`, async (req, res, ctx) => {
  //   return res(ctx.status(200), ctx.json(exampleProject));
  // }),
  rest.get(`${backendApiUrl}/api/projects/all_id/`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ project_ids: ["mxTaUJh"] }));
  }),
  rest.get(`${backendApiUrl}/api/projects/:project_id/text_messages/`, (req, res, ctx) => {
    const resBody = {
      count: exampleTextMessages.length,
      items: exampleTextMessages,
    };
    return res(ctx.status(200), ctx.json(resBody));
  }),
  rest.get(`${backendApiUrl}/api/projects/:project_id/image_messages/`, (req, res, ctx) => {
    const resBody = {
      count: exampleImageMessages.length,
      items: exampleImageMessages,
    };
    return res(ctx.status(200), ctx.json(resBody));
  }),
];
