import type { NextPage } from "next";
import BlogPost from "components/BlogPost";
import Container from "components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";

const TypeScript = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const type = posts.filter((post) => post.category === "type");
  return (
    <Container>
      <article className={`mt-10 flex flex-col`}>
        {type.map((post) => (
          <BlogPost
            date={post.date.slice(0, 10)}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      </article>
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

export default TypeScript;
