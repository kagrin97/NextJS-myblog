import React from "react";
import { InferGetStaticPropsType } from "next";

import PostCategorySlug from "components/Post/PostCategorySlug";
import { Post } from "types/posts";
import { makeMeta } from "utils/makeMeta";
import handleStructuredData from "data/metadata";

import { allTypes } from "contentlayer/generated";

export default function Slug(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <PostCategorySlug {...props} />;
}

export const getStaticPaths = async () => {
  return {
    paths: allTypes.map((p: Post) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allTypes.find((p: Post) => p.slug === params.slug);

  const customMeta = makeMeta(post);
  const structuredData = handleStructuredData(customMeta);
  return {
    props: {
      post,
      structuredData,
    },
  };
};
