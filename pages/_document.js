import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="CannaLife - NJ Premium Cannabis"
        />
        <meta
          name="keywords"
          content="cannalife, nj dispensary, dispensary north NJ"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
