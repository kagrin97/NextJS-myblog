import React from "react";

import Head from "next/head";

export default function MetaTag({ meta }) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{meta.title}</title>

      <meta name="Date" content={meta.date} />
      <meta name="description" content={meta.description} />
      <meta name="by" content={meta.author} />

      <meta property="og:type" content={meta.type} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:article:author" content={meta.author} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content={meta.author} />
      <meta property="og:url" content={meta.url} />

      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />

      <meta property="dg:plink" content={meta.url} />
      <meta name="plink" content={meta.url} />
      <meta name="title" content={meta.title} />
      <meta name="article:media_name" content={meta.author} />
      <meta property="article:mobile_url" content={meta.url} />
      <meta property="article:pc_url" content={meta.url} />
      <meta property="article:mobile_view_url" content={meta.url} />
      <meta property="article:pc_view_url" content={meta.url} />
      <meta property="article:talk_channel_view_url" content={meta.url} />
      <meta
        property="article:pc_service_home"
        content="https://kagrin97-blog.vercel.app"
      />
      <meta
        property="article:mobile_service_home"
        content="https://kagrin97-blog.vercel.app/m"
      />
      <meta property="article:published_time" content={meta.date} />

      <meta
        name="naver-site-verification"
        content="da98b9d3244abed109afb03767f0adf1a713f595"
      />
      <meta
        name="google-site-verification"
        content="tHzgblVRtM5UJi1BBTUouxZXp_txiBpb0KwUytGz0rI"
      />
    </Head>
  );
}
