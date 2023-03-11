import React from "react";
import { InferGetStaticPropsType } from "next";

import PostCategoryMain from "components/Post/PostCategoryMain";
import handleStructuredData from "data/metadata";
import { Post } from "types/posts";

import { allGits } from "contentlayer/generated";

export default function Git({
  posts,
  structuredData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PostCategoryMain
      allDoc={allGits}
      posts={posts}
      structuredData={structuredData}
    />
  );
}

export const getStaticProps = async () => {
  let posts = allGits.sort(
    (a: Post, b: Post) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  const structuredData = handleStructuredData();
  return {
    props: {
      posts,
      structuredData,
    },
  };
};
