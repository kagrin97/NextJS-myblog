import { useState } from "react";

import { Post } from "types/posts";

interface PaginationPosts {
  newPosts: Post;
  pageCount: number;
  curPage: number;
  setCurPage: (page: number) => void;
}

export default function usePaginationPosts({
  posts,
}: {
  posts: Post[];
}): PaginationPosts {
  const [curPage, setCurPage] = useState<number>(1);
  const LIMIT_ITEM: number = 10;
  const startItem: number = (curPage - 1) * LIMIT_ITEM;
  const newPosts: Post[] = posts.slice(startItem, startItem + LIMIT_ITEM);
  const pageCount: number = Math.ceil(posts.length / LIMIT_ITEM);

  return { newPosts, pageCount, curPage, setCurPage };
}
