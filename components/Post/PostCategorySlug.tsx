import Container from "components/Layout/Container";
import Comments from "components/Post/Comments";
import TopBtn from "components/UIElements/TopBtn";
import BlogContents from "components/Post/BlogContents";

import { makeMeta } from "utils/makeMeta";

import { useMDXComponent } from "next-contentlayer/hooks";

const PostCategorySlug = (post) => {
  const MDXComponent = useMDXComponent(post.body.code);
  const customMeta = makeMeta(post);
  return (
    <Container customMeta={customMeta} className="relative">
      <BlogContents post={post} MDXComponent={MDXComponent} />
      <TopBtn />
      <Comments />
    </Container>
  );
};

export default PostCategorySlug;
