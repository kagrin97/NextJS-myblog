import React from "react";

import { InferGetStaticPropsType } from "next";

import PostCategorySlug from "components/Post/PostCategorySlug";

import { allAlgorithms } from "contentlayer/generated";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <PostCategorySlug {...post} />;
}

export const getStaticPaths = async () => {
  return {
    paths: allAlgorithms.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allAlgorithms.find((p) => p.slug === params.slug);
  return {
    props: {
      post,
    },
  };
};
