import type { NextPage } from "next";
import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";

const NextJs = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const nextjs = posts.filter((post) => post.category === "nextjs");
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {nextjs.map((post) => (
          <BlogPost
            date={post.date.slice(0, 10)}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default NextJs;
