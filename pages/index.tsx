import { useEffect, useState } from "react";
import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

import Container from "../components/Container";
import RecentPosts from "components/RecentPosts";
import SearchPosts from "components/SearchPosts";

const Home = () => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <section className={`relative`}>
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
            <span className={`ml-3`}>개발을 위한 개발생활</span>
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
        </section>
      </div>
    </Container>
  );
};

export default Home;
