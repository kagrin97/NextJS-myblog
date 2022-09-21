import { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";

import Container from "components/Container";
import SeachBar from "components/SeachBar";
import PostList from "components/PostList";
import TopBtn from "components/TopBtn";

import { allNexts } from "contentlayer/generated";

const NextJs = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const getSearchPosts = () => {
    if (searchTitle !== "") {
      const tmp = [];
      allNexts.map((post) => {
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

  const nextjs = posts.filter((post) => post.category === "nextjs");
  return (
    <Container>
      <SeachBar
        searchTitle={searchTitle}
        onChangeSearchTitle={onChangeSearchTitle}
      />
      <PostList searchPosts={searchPosts} posts={nextjs} />
      <TopBtn />
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allNexts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default NextJs;
