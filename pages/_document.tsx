import React from "react";
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
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <meta name="theme-color" content="#24B95E" />
        </Head>
        <div id="drawer-hook" />
        <div id="backdrop-hook" />
        <div id="install-pwa-modal" />
        <body className="bg-gray-100 dark:bg-neutral-800 text-black  dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
