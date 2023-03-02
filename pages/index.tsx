import React from "react";

import Container from "components/Container";
import BlogPost from "components/BlogPost";

import { allDocuments } from "contentlayer/generated";

export default function Home() {
  const sortedByDate = allDocuments.sort((item1: any, item2) => {
    return new Date(item2.date).getTime() - new Date(item1.date).getTime();
  });

  const fiveMostRecent = sortedByDate.slice(0, 7);
  return (
    <Container>
      <div className={`my-10 w-full`}>
        <h1 className={`text-2xl font-black text-center`}>LATEST ARTICLES</h1>

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
