import Document, { Head, Html, Main, NextScript } from "next/document";

import { getCssText, globalStyles } from "../stitches.config";

export default class MyDocument extends Document {
  render(): JSX.Element {
    globalStyles();
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300&family=M+PLUS+1p&display=swap"
            rel="stylesheet"
          ></link>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
