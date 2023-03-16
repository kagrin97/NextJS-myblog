import { metadata } from "data/metadata";
import type { Post } from "types/posts";

export const makeMeta = (post: Post) => {
  return {
    ...metadata,
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
    url: post._raw.flattenedPath,
  };
};
