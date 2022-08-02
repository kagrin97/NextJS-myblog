import type { NextPage } from "next";
import Container from "../components/Container";

import Image from "next/image";
import RecentPosts from "../components/RecentPosts";
import metadata from "../data/metadata";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/배너.jpg`}
            alt="대표 이미지"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
          <article
            className={`flex-col absolute top-14 font-extrabold italic text-white text-base md:text-3xl text flex justify-center w-full drop-shadow-lg`}
          >
            <span className={`ml-3 mb-3`}>MinGyu-Kang Development Blog</span>
            <span className={`ml-3`}>개발자로서의 개발을 위한 개발생활</span>
          </article>

          <div className={`absolute bottom-5 left-5 animate-pulse`}>
            <Link href="https://github.com/kagrin97">
              <Image
                src={`/github.png`}
                alt="깃허브"
                width={40}
                height={40}
                className={`rounded-3xl hover:cursor-pointer`}
              />
            </Link>
          </div>
        </div>

        <RecentPosts posts={posts} />
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Home;
