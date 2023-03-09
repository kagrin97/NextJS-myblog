import React from "react";
import { InferGetStaticPropsType } from "next";

import PostCategoryMain from "components/Post/PostCategoryMain";

import { allAlgorithms } from "contentlayer/generated";

import { Post } from "types/posts";

export default function Algorithms({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostCategoryMain allDoc={allAlgorithms} posts={posts} />;
}

export const getStaticProps = async () => {
  let posts = allAlgorithms.sort(
    (a: Post, b: Post) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};
