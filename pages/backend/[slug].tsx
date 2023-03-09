import React from "react";

import { InferGetStaticPropsType } from "next";

import PostCategorySlug from "components/Post/PostCategorySlug";

import { allBackEnds } from "contentlayer/generated";

import { Post } from "types/posts";

export default function Slug({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostCategorySlug {...post} />;
}

export const getStaticPaths = async () => {
  return {
    paths: allBackEnds.map((p: Post) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allBackEnds.find((p: Post) => p.slug === params.slug);
  return {
    props: {
      post,
    },
  };
};
