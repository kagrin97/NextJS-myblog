import React from "react";

interface Props {
  urlPath: string;
  ogTitle: string;
  ogDescription?: string;
  ogImage?: string;
  URL: string;
}

const OpenGraphPreview = ({
  urlPath,
  ogTitle,
  ogDescription = "설명이 존재하지 않습니다.",
  ogImage = "../../imgs/not-found-img.png",
  URL,
}: Props) => {
  return (
    <a
      href={urlPath}
      rel="noreferrer"
      id="link"
      target="_blank"
      className="my-4 flex justify-around rounded-md shadow-lg dark:shadow-cyan-500/50 overflow-hidden h-44 max800:h-32 dark:bg-neutral-900 leading-tight"
    >
      <div className="p-4 w-3/5">
        <h4 className="text-lg max800:text-base dark:text-white line-clamp-1 mt-0">
          {ogTitle}
        </h4>
        <p className="max800:text-sm text-gray-500 dark:text-gray-400 line-clamp-3 max800:line-clamp-2 max800:mb-1">
          {ogDescription}
        </p>
        <small className="max800:text-xs text-gray-400 dark:text-gray-500 line-clamp-2 max800:mb-2">
          {URL}
        </small>
      </div>
      <div className="h-full w-2/5">
        <img
          src={ogImage}
          className="h-full w-full object-cover mt-0"
          alt={ogTitle}
        />
      </div>
    </a>
  );
};

export default OpenGraphPreview;
