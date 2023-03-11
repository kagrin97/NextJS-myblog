import React from "react";
import { InferGetStaticPropsType } from "next";

import Container from "components/Layout/Container";
import BlogPost from "components/Post/BlogPost";
import { Post } from "types/posts";
import handleStructuredData from "data/metadata";

import { allDocuments } from "contentlayer/generated";
type SortedPosts = Post[];

function sortPostsByDate(posts: Post[]): Post[] {
  return posts.sort((post1: Post, post2: Post) => {
    return new Date(post2.date).getTime() - new Date(post1.date).getTime();
  });
}

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const allPosts: Post[] = allDocuments;
  const sortedByDate: SortedPosts = sortPostsByDate(allPosts);
  const mostRecentPosts: Post[] = sortedByDate.slice(0, 7);

  return (
    <Container structuredData={props.structuredData}>
      <div className={`my-10 w-full`}>
        <h1
          className={`text-2xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600`}
        >
          LATEST ARTICLES
        </h1>

        {mostRecentPosts.length > 0 && (
          <div>
            {mostRecentPosts.map((post: Post, index: number) => (
              <React.Fragment key={index}>
                <BlogPost
                  date={post.date}
                  title={post.title}
                  des={post.description}
                  slug={`${post.type.toLowerCase()}/${post.slug}`}
                >
                  {post.type}
                </BlogPost>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  const structuredData = handleStructuredData();
  return {
    props: {
      structuredData,
    },
  };
};
