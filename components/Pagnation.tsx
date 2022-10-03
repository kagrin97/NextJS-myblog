import React from "react";

interface PagnationProps {
  pageCount: number;
  setCurPage: (page: number) => void;
  curPage: number;
}

export default function Pagnation({
  pageCount,
  setCurPage,
  curPage,
}: PagnationProps) {
  const onChangePage = (e) => {
    setCurPage(+e.target.innerText);
  };

  const pageArray = [];
  for (let i = 1; i < pageCount + 1; i++) {
    if (curPage === i) {
      pageArray.push(
        <li
          onClick={onChangePage}
          className=" py-1 px-2 leading-tight text-gray-500 bg-red-300 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer"
        >
          {i}
        </li>
      );
    } else {
      pageArray.push(
        <li
          onClick={onChangePage}
          className="py-1 px-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer"
        >
          {i}
        </li>
      );
    }
  }
  return (
    <nav className="flex justify-center">
      <ul className="flex">{pageArray}</ul>
    </nav>
  );
}
