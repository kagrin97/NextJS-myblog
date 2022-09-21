import { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";

import Container from "components/Container";
import SeachBar from "components/SeachBar";
import PostList from "components/PostList";
import TopBtn from "components/TopBtn";

import { allJs } from "contentlayer/generated";

const JavaScript = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const getSearchPosts = () => {
    if (searchTitle !== "") {
      const tmp = [];
      allJs.map((post) => {
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

  const javaScript = posts.filter((post) => post.category === "js");

  return (
    <Container>
      <SeachBar
        searchTitle={searchTitle}
        onChangeSearchTitle={onChangeSearchTitle}
      />
      <PostList searchPosts={searchPosts} posts={javaScript} />
      <TopBtn />
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allJs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default JavaScript;
