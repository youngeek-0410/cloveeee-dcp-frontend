import axios, { AxiosRequestConfig } from "axios";

import { Project } from "../domain/type";

export const backendApiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:8000";

const backendApiClient = axios.create({
  baseURL: backendApiUrl,
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_BACKEND_API_KEY,
  },
});

type GetProjectDataRequest = {
  text_message_limit: number;
  image_message_limit: number;
};

type GetProjectDataResponse = Project;

export const getProject = async (project_id: string): Promise<{ project: Project; status: number }> => {
  const params: GetProjectDataRequest = {
    text_message_limit: 20,
    image_message_limit: 20,
  };

  const requestConfig: AxiosRequestConfig = { params };
  const { data, status } = await backendApiClient.get<GetProjectDataResponse>(
    `/api/projects/${project_id}/`,
    requestConfig
  );
  if (status !== 200) throw new Error("failed to get project data");
  return { project: data, status };
};

type GetAllProjectIDsResponse = {
  project_ids: string[];
};

type ProjectIDList = string[];
export const GetAllProjectIDs = async (): Promise<ProjectIDList> => {
  const { data, status } = await backendApiClient.get<GetAllProjectIDsResponse>(`/api/projects/all_id/`);
  if (status !== 200) throw new Error("failed to get project data");
  return data.project_ids;
};
