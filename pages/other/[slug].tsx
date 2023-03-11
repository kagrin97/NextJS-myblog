import React from "react";
import { InferGetStaticPropsType } from "next";

import PostCategorySlug from "components/Post/PostCategorySlug";
import { Post } from "types/posts";
import { makeMeta } from "utils/makeMeta";
import handleStructuredData from "data/metadata";

import { allOthers } from "contentlayer/generated";

export default function Slug(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <PostCategorySlug {...props} />;
}

export const getStaticPaths = async () => {
  return {
    paths: allOthers.map((p: Post) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allOthers.find((p: Post) => p.slug === params.slug);

  const customMeta = makeMeta(post);
  const structuredData = handleStructuredData(customMeta);
  return {
    props: {
      post,
      structuredData,
    },
  };
};
