import React from "react";

interface Props {
  urlPath: string;
  ogTitle: string;
  ogDescription?: string;
  ogImage?: string;
}

const OpenGraphPreview = ({
  urlPath,
  ogTitle,
  ogDescription = "설명이 존재하지 않습니다.",
  ogImage = "../../not-found-img.png",
}: Props) => {
  return (
    <a
      href={urlPath}
      rel="noreferrer"
      id="link"
      target="_blank"
      className="my-4 flex justify-around rounded-md shadow-lg dark:shadow-cyan-500/50 overflow-hidden h-44 max800:h-32 dark:bg-neutral-900"
    >
      <div className="p-4 w-3/5">
        <h4 className="text-lg dark:text-white line-clamp-1">{ogTitle}</h4>
        <p className="max800:text-sm text-gray-400 line-clamp-3 max800:line-clamp-2">
          {ogDescription}
        </p>
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
