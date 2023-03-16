import React from "react";

import PostCategoryMain from "components/Post/PostCategoryMain";
import handleStructuredData from "data/metadata";
import navlinks, { Navlinks } from "data/navlinks";
import { checkCategory } from "utils/checkCategory";

import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import type { Post } from "types/posts";
import type { DocumentTypes } from ".contentlayer/generated/types";

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
  const links = navlinks.map((navlink: Navlinks) => navlink.link);
  const paths = links.map((link: string) => ({
    params: { category: link.slice(1) },
  }));
  return {
    paths,
    fallback: false,
  };
};

type PageParams = {
  category: string;
};

export const getStaticProps = async (
  context: GetStaticPropsContext<PageParams>
) => {
  if (!context.params) {
    return;
  }
  const { category } = context.params;

  let posts: Post[] | undefined;
  let curDocs: DocumentTypes[] | undefined;

  const handelSortDocs = (curDos: DocumentTypes[]) => {
    curDocs = curDos;
    posts = curDos.sort(
      (a: Post, b: Post) => Number(new Date(b.date)) - Number(new Date(a.date))
    );
  };

  checkCategory(category, handelSortDocs);

  const structuredData = handleStructuredData();
  return {
    props: {
      posts: posts ? posts : null,
      structuredData,
      curDocs: curDocs ? curDocs : null,
    },
  };
};

export default Category;
