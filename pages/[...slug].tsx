import React from "react";

import PostCategorySlug from "components/Post/PostCategorySlug";
import { makeMeta } from "utils/makeMeta";
import handleStructuredData from "data/metadata";
import { checkCategory } from "utils/checkCategory";

import * as Articles from "contentlayer/generated";

import type { InferGetStaticPropsType } from "next";
import type { Post } from "types/posts";
import type { DocumentTypes } from ".contentlayer/generated/types";

const Slug = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <PostCategorySlug {...props} />;
};

export const getStaticPaths = async () => {
  const paths = Articles.allDocuments.map((p: Post) => ({
    params: { slug: [p._raw.sourceFileDir, p.slug] },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const category = params.slug[0];
  let post: Post;

  const getArticle = (curDos: DocumentTypes[]) => {
    post = curDos.find((p: Post) => p.slug === params.slug[1]);
  };

  checkCategory(category, getArticle);

  const customMeta = makeMeta(post);
  const structuredData = handleStructuredData(customMeta);
  return {
    props: {
      post,
      structuredData,
    },
  };
};

export default Slug;
