import Link from "next/link";

const RecentPosts = ({ posts }) => {
  return (
    <section className={`mt-10`}>
      <div className={`flex flex-col`}>
        {posts.slice(0, 5).map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
          >
            <a className="mt-5 transition ease-in-out hover:-translate-x-1.5 hover:text-green-500/80">
              <div
                className={`flex justify-between border-b-2 border-green-200 pb-3`}
              >
                <div className={`flex flex-col`}>
                  <div className={`font-semibold text-xl`}>{post.title}</div>
                  <div
                    className={`font-light text-sm opacity-70 line-clamp-1 md:line-clamp-none`}
                  >
                    {post.description}
                  </div>
                </div>
                <div className={`font-thin text-sm`}>
                  {post.date.slice(2, 4)}년 {post.date.slice(5, 7)}월{" "}
                  {post.date.slice(8, 10)}일
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
