import React from "react";
import Head from "next/head";
import Link from "next/link";

import HeaderNav from "./HeaderNav";
import SideNav from "./SideNav";
import useResizeWidth from "hooks/useResizeWidth";

import NextProgress from "next-progress";
import ProgressBar from "react-scroll-progress-bar";

import { StructuredDataType } from "data/metadata";
interface ContainerProps {
  structuredData?: StructuredDataType;
  children?: React.ReactNode;
  className?: string | undefined | null | false | Record<string, boolean>;
}

export default function Container({
  structuredData,
  children,
  className,
}: ContainerProps) {
  const widthSize = useResizeWidth();

  return (
    <main className={`w-full flex flex-col items-center p-3 relative`}>
      <Head>
        {structuredData && (
          <React.Fragment>
            <title>{structuredData.headline}</title>

            <meta name="description" content={structuredData.description} />
            <meta property="og:title" content={structuredData.headline} />
            <meta
              property="og:description"
              content={structuredData.description}
            />
            <meta property="og:url" content={structuredData.url} />
            <meta property="og:image" content={structuredData.image} />

            <meta name="twitter:title" content={structuredData.headline} />
            <meta
              name="twitter:description"
              content={structuredData.description}
            />

            <meta
              property="article:published_time"
              content={structuredData.datePublished}
            ></meta>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
              }}
            />
          </React.Fragment>
        )}
      </Head>
      <NextProgress
        color="#22c55e"
        delay={300}
        options={{ showSpinner: true }}
      />
      <ProgressBar bgcolor="#22c55e" />

      <HeaderNav />

      <div className={`flex w-full max-w-5xl mt-10`}>
        {widthSize && widthSize >= 800 && (
          <aside className={`w-1/5 min-h-screen`}>
            <SideNav />
          </aside>
        )}
        <section className={`w-4/5 max800:w-full`}>{children}</section>
      </div>
    </main>
  );
}
