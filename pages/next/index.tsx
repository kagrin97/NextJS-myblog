import React from "react";
import { InferGetStaticPropsType } from "next";

import PostCategoryMain from "components/Post/PostCategoryMain";
import handleStructuredData from "data/metadata";
import { Post } from "types/posts";

import { allNexts } from "contentlayer/generated";

export default function NextJs({
  posts,
  structuredData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PostCategoryMain
      allDoc={allNexts}
      posts={posts}
      structuredData={structuredData}
    />
  );
}

export const getStaticProps = async () => {
  let posts = allNexts.sort(
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
