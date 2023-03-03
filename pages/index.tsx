import React from "react";

import Container from "components/Layout/Container";
import BlogPost from "components/Post/BlogPost";

import { allDocuments } from "contentlayer/generated";

export default function Home() {
  const sortedByDate = allDocuments.sort((item1: any, item2) => {
    return new Date(item2.date).getTime() - new Date(item1.date).getTime();
  });

  const fiveMostRecent = sortedByDate.slice(0, 7);
  return (
    <Container>
      <div className={`my-10 w-full`}>
        <h1
          className={`text-2xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600`}
        >
          LATEST ARTICLES
        </h1>

        {fiveMostRecent.length && (
          <div>
            {fiveMostRecent.map((post, index) => (
              <React.Fragment key={index}>
                <BlogPost
                  date={post.date}
                  title={post.title}
                  des={post.description}
                  slug={`${post.type.toLowerCase()}/${post.slug}`}
                >
                  {post.type}
                </BlogPost>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}
