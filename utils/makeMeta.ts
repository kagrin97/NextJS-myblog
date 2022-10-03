export const makeMeta = (post) => {
  return {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };
};
