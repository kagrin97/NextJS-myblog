import { InferGetStaticPropsType } from "next";

import Container from "components/Container";
import Comments from "components/Comments";
import TopBtn from "components/TopBtn";
import BlogContents from "components/BlogContents";

import { makeMeta } from "utils/makeMeta";

import { allDataBases } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXComponent = useMDXComponent(post.body.code);
  const customMeta = makeMeta(post);

  return (
    <Container customMeta={customMeta} className="relative">
      <BlogContents post={post} MDXComponent={MDXComponent} />
      <TopBtn />
      <Comments />
    </Container>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allDataBases.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allDataBases.find((p) => p.slug === params.slug);
  return {
    props: {
      post,
    },
  };
};
