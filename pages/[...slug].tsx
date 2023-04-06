import React from "react";

import PostCategorySlug from "components/Post/PostCategorySlug";
import { makeMeta } from "utils/makeMeta";
import handleStructuredData, { StructuredDataType } from "data/metadata";
import { getCategoryDocs } from "utils/getCategoryDocs";

import * as Articles from "contentlayer/generated";

import type { GetStaticPropsContext } from "next";
import type { Post } from "types/posts";

interface Props {
  post: Post;
  structuredData: StructuredDataType;
}

const Slug = (props: Props) => {
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

type PageParams = {
  slug: string[];
};

export const getStaticProps = async (
  context: GetStaticPropsContext<PageParams>
) => {
  const { slug } = context.params ?? {};
  if (!slug) {
    return;
  }

  const [category, postSlug] = slug;

  const curDocs = getCategoryDocs(category) as Post[];

  const post = curDocs?.find((p: Post) => p.slug === postSlug);

  const structuredData = post
    ? handleStructuredData(makeMeta(post))
    : undefined;

  return {
    props: {
      post: post ?? null,
      structuredData: structuredData ?? null,
    },
  };
};

export default Slug;
