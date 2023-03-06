import BlogPost from "./BlogPost";

export default function PostList({ searchPosts, posts }) {
  return (
    <article className={`mt-20 flex flex-col`}>
      {searchPosts.length ? (
        <div>
          {searchPosts.map((post) => (
            <BlogPost
              date={post.date.slice(0, 10)}
              title={post.title}
              des={post.description}
              slug={post._raw.flattenedPath}
              key={post._id}
            />
          ))}
        </div>
      ) : (
        <div>
          {posts.map((post) => (
            <BlogPost
              date={post.date.slice(0, 10)}
              title={post.title}
              des={post.description}
              slug={post._raw.flattenedPath}
              key={post._id}
            />
          ))}
        </div>
      )}
    </article>
  );
}