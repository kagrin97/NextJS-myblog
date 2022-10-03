export default function BlogContents({ post, MDXComponent }) {
  return (
    <article className="mt-10 prose max-w-none">
      <h1 className="text-green-500 text-center">{post.title}</h1>
      <h3 className="text-green-600 text-end italic">
        {post.date.slice(0, 4)}년 {post.date.slice(5, 7)}월
        {post.date.slice(8, 10)}일
      </h3>
      <article className={`w-full dark:text-slate-50 text-neutral-900`}>
        <MDXComponent />
      </article>
    </article>
  );
}
