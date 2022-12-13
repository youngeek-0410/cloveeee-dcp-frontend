import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import { Project } from "../domain/type";

import { GeneralPageProps } from "./_app";

type Props = {
  project?: Project;
} & GeneralPageProps;

const Page: NextPage<Props> = (props) => {
  const router = useRouter();
  const { project_id } = router.query;

  return <div {...props}>{project_id}</div>;
};

export default Page;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  return {
    props: {},
  };
};
