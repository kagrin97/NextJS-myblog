import React, { useEffect } from "react";

import PostList from "components/Post/PostList";
import Container from "components/Layout/Container";
import SeachBar from "components/UIElements/SeachBar";
import TopBtn from "components/UIElements/TopBtn";
import Pagnation from "components/UIElements/Pagnation";

import usePagnationPosts from "hooks/usePagnationPosts";
import useSearchPosts from "hooks/useSearchPosts";

import type { StructuredDataType } from "data/metadata";
import type { Post } from "types/posts";
import type { DocumentTypes } from ".contentlayer/generated/types";

interface Props {
  allDoc: DocumentTypes[];
  posts: Post[];
  structuredData: StructuredDataType;
}

const PostCategoryMain = ({ allDoc, posts, structuredData }: Props) => {
  const { searchTitle, searchPosts, onChangeSearchTitle, getSearchPosts } =
    useSearchPosts(allDoc);

  const { newPosts, pageCount, curPage, setCurPage } = usePagnationPosts({
    posts,
  });

  useEffect(() => {
    getSearchPosts();
  }, [searchTitle]);

  return (
    <Container structuredData={structuredData}>
      <SeachBar
        searchTitle={searchTitle}
        onChangeSearchTitle={onChangeSearchTitle}
      />
      <PostList searchPosts={searchPosts} posts={newPosts} />
      {!searchTitle && (
        <Pagnation
          curPage={curPage}
          pageCount={pageCount}
          setCurPage={setCurPage}
        />
      )}
      <TopBtn />
    </Container>
  );
};

export default PostCategoryMain;
