import { useEffect, useState } from "react";
import Image from "next/image";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

import Container from "../components/Container";
import RecentPosts from "components/RecentPosts";
import SearchPosts from "components/SearchPosts";

import { allPosts } from "contentlayer/generated";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const getSearchPosts = () => {
    if (searchTitle !== "") {
      const tmp = [];
      allPosts.map((post) => {
        const regex = new RegExp(searchTitle, "gim");
        if (regex.test(post.title)) {
          tmp.push(post);
        }
      });
      setSearchPosts(tmp);
    } else {
      setSearchPosts([]);
    }
  };

  useEffect(() => {
    getSearchPosts();
  }, [searchTitle]);

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
        <form className={`w-full flex items-center`}>
          <input
            type="text"
            value={searchTitle}
            onChange={onChangeSearchTitle}
            className={`w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-neutral-800 mt-3 border-4 border-gray-200 dark:border-gray-600 focus:outline-none`}
            placeholder="찾고싶은 블로그 포스터의 제목을 입력하세요 😎"
          />
        </form>
        {searchPosts.length ? (
          <SearchPosts posts={searchPosts} />
        ) : (
          <RecentPosts posts={posts} />
        )}
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
