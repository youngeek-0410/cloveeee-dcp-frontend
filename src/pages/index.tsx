import axios, { AxiosRequestConfig } from "axios";
import { GetServerSideProps, NextPage } from "next";

import { backendApiUrl } from "../utils/apiUrl";
import { Project } from "../domain/type";
import { RootContainer } from "../Root";

type GetProjectApiRequest = {
  text_message_limit: number;
  image_message_limit: number;
};

type GetProjectApiResponse = Project;

type Props = {
  project: Project;
};

const Page: NextPage<Props> = ({ project }) => {
  return <RootContainer project={project} />;
};

export default Page;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { project_id } = ctx.query;

  const params: GetProjectApiRequest = {
    text_message_limit: 20, // NOTE: まだ件数が多い時の仕様が固まってないので適当な値
    image_message_limit: 20, // NOTE: まだ件数が多い時の仕様が固まってないので適当な値
  };

  const requestConfig: AxiosRequestConfig<GetProjectApiRequest> = {
    url: `${backendApiUrl}/api/projects/${project_id}/`,
    method: "GET",
    params,
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  };

  const { data, status } = await axios.request<GetProjectApiResponse>(requestConfig);
  if (status === 404) {
    return {
      notFound: true,
    };
  } else if (status !== 200) {
    throw new Error("Failed to get project");
  }

  return {
    props: {
      project: data,
    },
  };
};
