import React, { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";
import Head from "next/head";

import { setupMockServer, setupMockWorker } from "../mocks/mock";
import { Project } from "../domain/type";

export type GeneralPageProps = {
  project: Project;
};
export type NextLayout = (page: ReactElement) => ReactNode;
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: NextLayout;
};

type AppPropsWithLayout<P> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

// for development
if (process.env.NODE_ENV === "development") {
  if (typeof window === "undefined") {
    const m = setupMockServer();
    m.listen();
  } else {
    const m = setupMockWorker();
    m.start();
  }
}

const App = ({ Component, pageProps }: AppPropsWithLayout<GeneralPageProps>) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      {pageProps.project?.top_image.url && pageProps.project?.receiver_name ? (
        <Head>
          <title>{pageProps.project.receiver_name}さんのWebサイト</title>
          <meta key="og:title" property="og:title" content={`${pageProps.project.receiver_name}さんのWebサイト`} />
          <meta property="og:type" content="website" />
          <meta
            key="og:description"
            property="og:description"
            content={`このサイトは${pageProps.project.receiver_name}さんのWebサイトです。${pageProps.project.receiver_name}さん、${pageProps.project.top_text}`}
          />
          <meta key="og:image" property="og:image" content={pageProps.project.top_image.url} />
          <link rel="icon" href="https://res.cloudinary.com/drb9hgnv3/image/upload/v1671063427/logo_pcmicx.svg" />
        </Head>
      ) : null}
      <Component {...pageProps} />
    </>
  );
};

export default App;
