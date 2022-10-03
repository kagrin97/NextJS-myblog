import { InferGetStaticPropsType } from "next";

import Container from "components/Container";
import Comments from "components/Comments";
import TopBtn from "components/TopBtn";
import BlogContents from "components/BlogContents";

import { allGits } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXComponent = useMDXComponent(post.body.code);
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

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
    paths: allGits.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allGits.find((p) => p.slug === params.slug);
  return {
    props: {
      post,
    },
  };
};
