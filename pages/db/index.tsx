import React from "react";
import { InferGetStaticPropsType } from "next";

import PostCategoryMain from "components/Post/PostCategoryMain";

import { allDataBases } from "contentlayer/generated";

export default function DataBase({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostCategoryMain allDoc={allDataBases} posts={posts} />;
}

export const getStaticProps = async () => {
  let posts = allDataBases.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};
