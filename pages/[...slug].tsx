import React from "react";

import PostCategorySlug from "components/Post/PostCategorySlug";
import { makeMeta } from "utils/makeMeta";
import handleStructuredData, { StructuredDataType } from "data/metadata";
import { checkCategory } from "utils/checkCategory";

import * as Articles from "contentlayer/generated";

import type { GetStaticPropsContext } from "next";
import type { Post } from "types/posts";
import type { DocumentTypes } from ".contentlayer/generated/types";

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
  if (!context.params) {
    return;
  }

  const { slug } = context.params;
  const category = slug[0];
  let post: Post | undefined;
  let structuredData: StructuredDataType | undefined;

  const getArticle = (curDos: DocumentTypes[]) => {
    post = curDos.find((p: Post) => p.slug === slug[1]);
    if (post) {
      const customMeta = makeMeta(post);
      structuredData = handleStructuredData(customMeta);
      return;
    }
  };

  checkCategory(category, getArticle);

  return {
    props: {
      post: post ? post : null,
      structuredData: structuredData ? structuredData : null,
    },
  };
};

export default Slug;
