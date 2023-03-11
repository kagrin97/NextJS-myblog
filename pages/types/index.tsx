import React from "react";
import { InferGetStaticPropsType } from "next";

import PostCategoryMain from "components/Post/PostCategoryMain";
import handleStructuredData from "data/metadata";
import { Post } from "types/posts";

import { allTypes } from "contentlayer/generated";

export default function Types({
  posts,
  structuredData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PostCategoryMain
      allDoc={allTypes}
      posts={posts}
      structuredData={structuredData}
    />
  );
}

export const getStaticProps = async () => {
  let posts = allTypes.sort(
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
