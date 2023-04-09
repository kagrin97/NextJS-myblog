import React from "react";
import BlogPost from "./BlogPost";

import { Post } from "types/posts";

interface Props {
  searchPosts: Post[];
  posts: Post[];
}

export default function PostList({ searchPosts, posts }: Props) {
  const postsToRender = searchPosts.length ? searchPosts : posts;

  return (
    <article>
      <ul className="mt-20 flex flex-col">
        {postsToRender.map((post) => (
          <BlogPost
            date={post.date.slice(0, 10)}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
            type={post.type}
          />
        ))}
      </ul>
    </article>
  );
}
