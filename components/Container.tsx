import React from "react";
import Image from "next/image";
import Link from "next/link";

import metadata from "data/metadata";
import Nav from "components/Nav";
import MetaTag from "components/MetaTag";

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

  return (
    <main className={`w-full flex flex-col items-center p-3 relative`}>
      <MetaTag meta={meta} />
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
        <Nav />
      </header>

      <section className={`w-full max-w-3xl mt-10`}>{props.children}</section>
    </main>
  );
}
