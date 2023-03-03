import React from "react";
import { InferGetStaticPropsType } from "next";

import PostCategoryMain from "components/Post/PostCategoryMain";

import { allServers } from "contentlayer/generated";

export default function Server({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostCategoryMain allDoc={allServers} posts={posts} />;
}

export const getStaticProps = async () => {
  let posts = allServers.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};
