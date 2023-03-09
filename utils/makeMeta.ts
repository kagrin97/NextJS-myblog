import { metadata } from "data/metadata";

export const makeMeta = (post) => {
  return {
    ...metadata,
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };
};
