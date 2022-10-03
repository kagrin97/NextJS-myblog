import { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";

import PostList from "components/PostList";
import Container from "components/Container";
import SeachBar from "components/SeachBar";
import TopBtn from "components/TopBtn";
import Pagnation from "components/Pagnation";

import usePagnationPosts from "hooks/usePagnationPosts";
import useSearchPosts from "hooks/useSearchPosts";

import { allAlgorithms } from "contentlayer/generated";

export default function Algorithms({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { searchTitle, searchPosts, onChangeSearchTitle, getSearchPosts } =
    useSearchPosts(allAlgorithms);

  const { newPosts, pageCount, curPage, setCurPage } = usePagnationPosts({
    posts,
  });

  useEffect(() => {
    getSearchPosts();
  }, [searchTitle]);

  return (
    <Container>
      <SeachBar
        searchTitle={searchTitle}
        onChangeSearchTitle={onChangeSearchTitle}
      />
      <PostList searchPosts={searchPosts} posts={newPosts} />
      {!searchTitle && (
        <Pagnation
          curPage={curPage}
          pageCount={pageCount}
          setCurPage={setCurPage}
        />
      )}
      <TopBtn />
    </Container>
  );
}

export const getStaticProps = async () => {
  let posts = allAlgorithms.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};
