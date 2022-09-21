import { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";

import PostList from "components/PostList";
import Container from "components/Container";
import SeachBar from "components/SeachBar";

import { allOthers } from "contentlayer/generated";

const Other = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchPosts, setSearchPosts] = useState([]);

  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const getSearchPosts = () => {
    if (searchTitle !== "") {
      const tmp = [];
      allOthers.map((post) => {
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

  const other = posts.filter((post) => post.category === "other");
  return (
    <Container>
      <SeachBar
        searchTitle={searchTitle}
        onChangeSearchTitle={onChangeSearchTitle}
      />
      <PostList searchPosts={searchPosts} posts={other} />
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allOthers.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Other;
