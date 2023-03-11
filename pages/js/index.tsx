import React from "react";
import { InferGetStaticPropsType } from "next";

import PostCategoryMain from "components/Post/PostCategoryMain";
import handleStructuredData from "data/metadata";
import { Post } from "types/posts";

import { allJs } from "contentlayer/generated";

export default function Javascript({
  posts,
  structuredData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PostCategoryMain
      allDoc={allJs}
      posts={posts}
      structuredData={structuredData}
    />
  );
}

export const getStaticProps = async () => {
  let posts = allJs.sort(
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
