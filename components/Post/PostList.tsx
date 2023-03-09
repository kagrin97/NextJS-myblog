import React from "react";
import BlogPost from "./BlogPost";

interface Post {
  date: string;
  title: string;
  description: string;
  _raw: {
    flattenedPath: string;
  };
  _id: string;
}

interface Props {
  searchPosts: Post[];
  posts: Post[];
}

export default function PostList({ searchPosts, posts }: Props): Element {
  const postsToRender = searchPosts.length ? searchPosts : posts;

  return (
    <article className="mt-20 flex flex-col">
      {postsToRender.map((post) => (
        <BlogPost
          date={post.date.slice(0, 10)}
          title={post.title}
          des={post.description}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </article>
  );
}
