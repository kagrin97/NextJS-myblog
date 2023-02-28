import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="google-site-verification"
            content="tHzgblVRtM5UJi1BBTUouxZXp_txiBpb0KwUytGz0rI"
          />
          <meta
            name="naver-site-verification"
            content="da98b9d3244abed109afb03767f0adf1a713f595"
          />
        </Head>
        <body className="bg-gray-100 dark:bg-neutral-800 text-black  dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
