import Image from "next/image";
import Head from "next/head";
import metadata from "../data/metadata";
import Nav from "./Nav";

const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };

  return (
    <div className={`w-full flex flex-col items-center p-3 relative`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
        <meta
          name="naver-site-verification"
          content="da98b9d3244abed109afb03767f0adf1a713f595"
        />
        <meta
          name="google-site-verification"
          content="tHzgblVRtM5UJi1BBTUouxZXp_txiBpb0KwUytGz0rI"
        />
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center pt-3 fixed top-0 z-10 bg-neutral-100 dark:bg-neutral-800`}
      >
        <div className={`flex flex-row items-center ml-2`}>
          <Image
            src={`/round.webp`}
            alt="로고"
            width={40}
            height={40}
            objectFit={`cover`}
            className={`rounded-full`}
          />
          <span className={`mx-3 font-semibold italic text-lg text-green-400`}>
            Kang blog
          </span>
        </div>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl mt-10`}>{props.children}</main>
    </div>
  );
};

export default Container;
