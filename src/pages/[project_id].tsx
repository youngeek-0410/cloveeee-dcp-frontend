import { GetStaticProps, NextPage } from "next";

import { Project } from "../domain/type";
import { RootContainer } from "../RootContainer";
import { GetAllProjectIDs, getProject } from "../utils/apis";

type Props = {
  project: Project;
};
const Page: NextPage<Props> = (props) => {
  return <RootContainer {...props} />;
};
export default Page;

export const getStaticProps: GetStaticProps<Props, { project_id: string }> = async (context) => {
  const project_id = context.params!.project_id;
  const { project } = await getProject(project_id);

  return {
    props: { project },
  };
};

export const getStaticPaths = async () => {
  const allProjectIds = await GetAllProjectIDs();

  // const paths = [
  //   ...allProjectIds.map((id) => {
  //     return {
  //       params: { project_id: id },
  //     };
  //   }),
  // ];
  const paths = [{ params: { project_id: "mxTaUJh" } }];

  return { paths, fallback: false };
};
