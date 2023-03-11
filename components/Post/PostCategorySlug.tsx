import React from "react";
import Container from "components/Layout/Container";
import Comments from "components/Post/Comments";
import TopBtn from "components/UIElements/TopBtn";
import BlogContents from "components/Post/BlogContents";

import { useMDXComponent } from "next-contentlayer/hooks";

const PostCategorySlug = ({ post, structuredData }) => {
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
