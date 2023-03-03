import { useEffect, useState } from "react";
import { InferGetStaticPropsType } from "next";

import PostCategoryMain from "components/Post/PostCategoryMain";

import { allBackEnds } from "contentlayer/generated";

export default function Git({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostCategoryMain allDoc={allBackEnds} posts={posts} />;
}

export const getStaticProps = async () => {
  const posts = allBackEnds.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};
