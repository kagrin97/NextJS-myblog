import React from "react";
import Container from "components/Layout/Container";
import Comments from "components/Post/Comments";
import TopBtn from "components/UIElements/TopBtn";
import BlogContents from "components/Post/BlogContents";

import { useMDXComponent } from "next-contentlayer/hooks";

import type { StructuredDataType } from "data/metadata";
import type { Post } from "types/posts";

interface Props {
  post: Post;
  structuredData: StructuredDataType;
}

const PostCategorySlug = ({ post, structuredData }: Props) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <Container structuredData={structuredData} className="relative">
      <BlogContents post={post} MDXComponent={MDXComponent} />
      <TopBtn />
      <Comments />
    </Container>
  );
};

export default PostCategorySlug;
