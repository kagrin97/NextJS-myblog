import React from "react";
import Link from "next/link";

interface Props {
  date: string;
  title: string;
  des: string;
  slug: string;
  type: string;
}

export default function BlogPost(props: Props) {
  return (
    <li className="w-full my-7 transition ease-in-out hover:-translate-x-1.5 hover:text-green-600 dark:hover:text-green-400">
      <Link href={`/${props.slug}`} passHref>
        <a>
          <div className="font-medium text-xs text-gray-400">
            <span className="mr-2 font-bold text-xs text-green-600 dark:text-green-500">
              {props.type}
            </span>
            {props.date}
          </div>
          <div className={`font-extrabold text-2xl mt-2`}>{props.title}</div>
          <div className={`font-medium opacity-50 text-lg mt-1`}>
            {props.des}
          </div>
        </a>
      </Link>
    </li>
  );
}
