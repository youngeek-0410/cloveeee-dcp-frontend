import React, { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next";

import { setupMockServer, setupMockWorker } from "../mocks/mock";

export type GeneralPageProps = {};
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

  return getLayout(<Component {...pageProps} />);
};

export default App;
