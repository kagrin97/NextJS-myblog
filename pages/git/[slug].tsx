import { InferGetStaticPropsType } from "next";

import Container from "components/Container";
import Comments from "components/Comments";
import TopBtn from "components/TopBtn";

import { allGits } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

  return (
    <Container customMeta={customMeta} className="relative">
      <article className="mt-10 prose max-w-none">
        <h1 className="text-green-500 text-center">{post.title}</h1>
        <h3 className="text-green-600 text-end italic">
          {post.date.slice(0, 4)}년 {post.date.slice(5, 7)}월
          {post.date.slice(8, 10)}일
        </h3>
        <article className={`w-full dark:text-slate-50 text-neutral-900`}>
          <MDXComponent />
        </article>
      </article>

      <TopBtn />
      <Comments />
    </Container>
  );
};

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

export default Post;
