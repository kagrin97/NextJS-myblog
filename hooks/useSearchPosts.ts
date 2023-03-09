import React, { useState } from "react";
import { Post } from "types/posts";

type SearchPostsResult = {
  searchTitle: string;
  searchPosts: Post[];
  onChangeSearchTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getSearchPosts: () => void;
};

export default function useSearchPosts(allPosts: Post[]): SearchPostsResult {
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchPosts, setSearchPosts] = useState<Post[]>([]);

  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const getSearchPosts = () => {
    const tmp: Post[] = [];
    if (searchTitle !== "") {
      const regex = new RegExp(searchTitle, "gim");
      allPosts.forEach((post: Post) => {
        if (regex.test(post.title)) {
          tmp.push(post);
        }
      });
    }
    setSearchPosts(tmp);
  };

  return { searchTitle, searchPosts, onChangeSearchTitle, getSearchPosts };
}
