import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { metadata } from "data/metadata";
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
            href="/icons/icon-48x48.png"
            rel="icon"
            type="image/png"
            sizes="48x48"
          />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <meta name="theme-color" content="#24B95E" />

          <meta name="description" content={metadata.description} />
          <meta property="og:site_name" content="카그린의 개발 블로그" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:url" content={metadata.url} />
          <meta property="og:image" content={metadata.image} />
        </Head>
        <div id="drawer-hook" />
        <div id="backdrop-hook" />
        <div id="install-pwa-modal" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
