import { GetServerSideProps, NextPage } from "next";

import { Project } from "../../domain/type";
import { GeneralPageProps } from "../_app";
import { RootContainer } from "../../RootContainer";
import { getProject } from "../../utils/apis";

type GetProjectApiRequest = {
  text_message_limit: number;
  image_message_limit: number;
};

type GetProjectApiResponse = Project;

type Props = {
  project: Project;
} & GeneralPageProps;

/*
 * デジタル色紙のプレビューページ
 * プレビュー色紙はProjectデータが動的に変わるなのでSSRで配信する
 */
const Page: NextPage<Props> = (props) => {
  return <RootContainer {...props} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { project_id } = ctx.query;

  const { project, status } = await getProject(project_id as string);
  if (status === 404) {
    return {
      notFound: true,
    };
  } else if (status !== 200) {
    throw new Error("Failed to get project");
  }

  return {
    props: {
      project,
    },
  };
};

export default Page;
