import React from "react";

import PostCategoryMain from "components/Post/PostCategoryMain";
import createStructuredData from "data/metadata";
import navlinks from "data/navlinks";
import { getCategoryDocs } from "utils/getCategoryDocs";

import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import type { Post } from "types/posts";

type PageParams = {
  category: string;
};

const Category = ({
  posts,
  structuredData,
  curDocs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PostCategoryMain
      allDoc={curDocs}
      posts={posts}
      structuredData={structuredData}
    />
  );
};

export const getStaticPaths = async () => {
  const paths = navlinks.map(({ link }) => ({
    params: { category: link && link.slice(1) },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<PageParams>
) => {
  const { category } = context.params ?? {};
  if (!category) {
    return;
  }

  const curDocs = getCategoryDocs(category);
  const posts = curDocs?.sort(
    (a: Post, b: Post) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  const structuredData = createStructuredData();

  return {
    props: {
      posts: posts ?? [],
      structuredData,
      curDocs: curDocs ?? {},
    },
  };
};

export default Category;
