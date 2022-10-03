import { useState } from "react";

export default function usePagnationPosts({ posts }) {
  const [curPage, setCurPage] = useState(1);
  const LIMIT_ITEM = 6;
  let newPosts;

  if (curPage === 1) {
    newPosts = posts.slice(0, LIMIT_ITEM);
  } else {
    const startItem = (curPage - 1) * LIMIT_ITEM;
    newPosts = posts.slice(startItem, startItem + LIMIT_ITEM);
  }

  const pageCount = Math.ceil(posts.length / LIMIT_ITEM);

  return { newPosts, pageCount, curPage, setCurPage };
}
