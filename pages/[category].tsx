import React from "react";

import PostCategoryMain from "components/Post/PostCategoryMain";
import handleStructuredData from "data/metadata";
import navlinks, { Navlinks } from "data/navlinks";
import { checkCategory } from "utils/checkCategory";

import type { InferGetStaticPropsType } from "next";
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

export const getStaticProps = async ({ params }) => {
  const { category } = params;

  let posts: Post[];
  let curDocs: DocumentTypes[];

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
      posts,
      structuredData,
      curDocs,
    },
  };
};

export default Category;
