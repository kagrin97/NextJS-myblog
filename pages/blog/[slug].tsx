import Container from "components/Container";
import Comments from "components/Comments";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { useTheme } from "next-themes";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };
  const { theme, setTheme } = useTheme();
  return (
    <Container customMeta={customMeta} className="relative">
      <div className="mt-10 prose">
        <h1 className="text-lime-500">{post.title}</h1>
        <div className={`dark:text-slate-50 text-neutral-900`}>
          <MDXComponent />
        </div>
      </div>
      <a href="#" className="fixed bottom-5 right-5">
        <Image
          src={`/top.png`}
          alt="top버튼"
          width={40}
          height={40}
          objectFit={`cover`}
          className={`${theme == "light" ? "invert-0" : "invert"}`}
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
