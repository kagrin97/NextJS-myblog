import { AiOutlineLink } from "react-icons/ai";

interface PropseType {
  urlPath: string;
  ogTitle: string;
  ogDescription?: string;
  ogImage?: string;
}

const OpenGraphPreview = ({
  urlPath,
  ogTitle,
  ogDescription,
  ogImage,
}: PropseType) => {
  if (ogTitle && ogDescription && ogImage) {
    return (
      <a
        href={urlPath}
        rel="noreferrer"
        target="_blank"
        className="my-4 flex justify-around rounded-md shadow-lg dark:shadow-cyan-500/50 overflow-hidden h-44 max800:h-32 dark:bg-neutral-900"
      >
        <div className="p-4 w-3/5">
          <h4 className="text-lg dark:text-white line-clamp-1">{ogTitle}</h4>
          <p className=" max800:text-sm text-gray-400 line-clamp-3 max800:line-clamp-2">
            {ogDescription}
          </p>
        </div>
        <div className=" h-full w-2/5 ">
          <img
            src={ogImage}
            className="h-full w-full object-cover mt-0"
            alt="{ogTitle}"
          />
        </div>
      </a>
    );
  }

  if (ogTitle) {
    return (
      <div className={`flex justify-center`}>
        <a
          href={urlPath}
          target="_blank"
          rel="noreferrer"
          className="my-4 shadow-lg dark:shadow-cyan-500/50 rounded-md w-3/5 h-16  dark:bg-neutral-900"
        >
          <div className="h-full w-full flex justify-evenly items-center">
            <h4 className="text-lg dark:text-white m-0 line-clamp-1">
              {ogTitle}
            </h4>
            <AiOutlineLink className="dark:text-white" size="30px" />
          </div>
        </a>
      </div>
    );
  }
};

export default OpenGraphPreview;
