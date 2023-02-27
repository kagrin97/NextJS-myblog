import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import metadata from "data/metadata";
import HeaderNav from "components/HeaderNav";
import SideNav from "components/SideNav";
import useMenuToggleWidth from "hooks/useMenuToggleWidth";

import NextProgress from "next-progress";
import ProgressBar from "react-scroll-progress-bar";

export default function Container(props) {
  const meta = {
    type: metadata.type,
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    url: metadata.url,
    ...props.customMeta,
  };

  const showMenuWidth = useMenuToggleWidth();

  return (
    <main className={`w-full flex flex-col items-center p-3 relative`}>
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
      </Head>
      <NextProgress
        color="#22c55e"
        delay={300}
        options={{ showSpinner: true }}
      />
      <ProgressBar bgcolor="#22c55e" />
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center pt-3 fixed top-0 z-10 bg-gray-100 dark:bg-neutral-800 bg-opacity-80 dark:bg-opacity-80`}
      >
        <Link href="/" passHref>
          <button className={`flex flex-row items-center ml-2 `}>
            <Image
              src={`/round.webp`}
              alt="로고"
              width={40}
              height={40}
              objectFit={`cover`}
              className={`rounded-full hover:animate-spin`}
            />
            <span
              className={`mx-3 font-semibssold italic text-lg text-green-400`}
            >
              Kang blog
            </span>
          </button>
        </Link>
        <HeaderNav />
      </header>
      <div className={`flex w-full max-w-3xl mt-10`}>
        {!showMenuWidth && (
          <aside className={`w-1/5`}>
            <SideNav />
          </aside>
        )}
        <section className={`w-4/5`}>{props.children}</section>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 800px) {
          section {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
