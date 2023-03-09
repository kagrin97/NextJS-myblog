import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import handleStructuredData from "data/metadata";
import HeaderNav from "./HeaderNav";
import SideNav from "./SideNav";
import useResizeWidth from "hooks/useResizeWidth";

import NextProgress from "next-progress";
import ProgressBar from "react-scroll-progress-bar";

import { MetadataType } from "data/metadata";

interface ContainerProps {
  customMeta?: MetadataType;
  children?: React.ReactNode;
  className?: string | undefined | null | false | Record<string, boolean>;
}

export default function Container(props: ContainerProps) {
  const widthSize = useResizeWidth();
  const structuredData = handleStructuredData(props.customMeta);

  return (
    <main className={`w-full flex flex-col items-center p-3 relative`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{structuredData.headline}</title>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <meta name="description" content={structuredData.description} />
        <meta property="og:title" content={structuredData.headline} />
        <meta property="og:description" content={structuredData.description} />
        <meta property="og:url" content={structuredData.url} />
        <meta property="og:image" content={structuredData.image} />

        <meta name="twitter:title" content={structuredData.headline} />
        <meta name="twitter:description" content={structuredData.description} />
      </Head>
      <NextProgress
        color="#22c55e"
        delay={300}
        options={{ showSpinner: true }}
      />
      <ProgressBar bgcolor="#22c55e" />
      <header
        className={`w-full max-w-5xl flex flex-row justify-between items-center pt-3 fixed top-0 z-10 bg-gray-100 dark:bg-neutral-800 bg-opacity-80 dark:bg-opacity-80`}
      >
        <Link href="/" passHref>
          <button className={`flex flex-row items-center ml-2 `}>
            <Image
              src={`/imgs/round.webp`}
              alt="로고"
              width={35}
              height={35}
              objectFit={`cover`}
              className={`rounded-full hover:animate-spin`}
              priority={true}
            />
            <span
              className={`mx-3 font-semibssold italic text-lg max800:text-sm text-green-400`}
            >
              Kang blog
            </span>
          </button>
        </Link>
        <HeaderNav />
      </header>
      <div className={`flex w-full max-w-5xl mt-10`}>
        {widthSize >= 800 && (
          <aside className={`w-1/5 min-h-screen`}>
            <SideNav />
          </aside>
        )}
        <section className={`w-4/5 max800:w-full`}>{props.children}</section>
      </div>
    </main>
  );
}
