import React from "react";

interface PaginationProps {
  pageCount: number;
  setCurPage: (page: number) => void;
  curPage: number;
}

export default function Pagination({
  pageCount,
  setCurPage,
  curPage,
}: PaginationProps) {
  const onChangePage = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setCurPage(+e.target.innerText);
  };

  const getPageClass = (isActive: boolean) =>
    `py-1 px-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:cursor-pointer ${
      isActive ? "bg-red-300" : "bg-white"
    } ${isActive ? "dark:bg-gray-600" : "dark:bg-gray-800"}`;

  const pageArray: React.ReactElement[] = [];
  for (let i = 1; i < pageCount + 1; i++) {
    const isActive = curPage === i;
    pageArray.push(
      <li key={i} onClick={onChangePage} className={getPageClass(isActive)}>
        {i}
      </li>
    );
  }

  return (
    <nav className="flex justify-center">
      <ul className="flex">{pageArray}</ul>
    </nav>
  );
}
