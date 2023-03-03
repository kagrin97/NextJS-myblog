import React from "react";
import { InferGetStaticPropsType } from "next";

import PostCategoryMain from "components/Post/PostCategoryMain";

import { allGits } from "contentlayer/generated";

export default function Git({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostCategoryMain allDoc={allGits} posts={posts} />;
}

export const getStaticProps = async () => {
  let posts = allGits.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};
