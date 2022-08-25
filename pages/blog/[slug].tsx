import Container from "components/Container";
import Comments from "components/Comments";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
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
      <article className="mt-10 prose">
        <h1 className="text-green-500">{post.title}</h1>
        <article className={`dark:text-slate-50 text-neutral-900`}>
          <MDXComponent />
        </article>
      </article>
      <a href="#" className="fixed bottom-5 right-5">
        <Image
          src={`/top.png`}
          alt="top버튼"
          width={40}
          height={40}
          objectFit={`cover`}
        />
      </a>
      <Comments />
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
