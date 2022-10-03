import Link from "next/link";

export default function BlogPost({ date, title, des, slug }) {
  return (
    <div className="w-full my-7 transition ease-in-out hover:-translate-x-1.5 hover:text-green-400/80">
      <Link href={`/${slug}`} passHref>
        <a>
          <div className="font-medium text-xs text-gray-400">{date}</div>
          <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
          <div className={`font-medium text-gray-600 text-xl mt-1`}>{des}</div>
        </a>
      </Link>
    </div>
  );
}
