import React from "react";
import Head from "next/head";

import type { StructuredDataType } from "data/metadata";

interface MetaTagProps {
  structuredData: StructuredDataType;
}

const HeadMetaTags = ({ structuredData }: MetaTagProps) => {
  return (
    <Head>
      {structuredData && (
        <React.Fragment>
          <title>{structuredData.headline}</title>
          <meta name="description" content={structuredData.description} />

          <meta property="og:title" content={structuredData.headline} />
          <meta
            property="og:description"
            content={structuredData.description}
          />
          <meta property="og:url" content={structuredData.url} />
          <meta property="og:image" content={structuredData.image} />

          <meta name="twitter:title" content={structuredData.headline} />
          <meta
            name="twitter:description"
            content={structuredData.description}
          />
          <meta name="twitter:card" content="summary_large_image" />

          <meta name="twitter:image" content={structuredData.image} />

          <meta
            property="article:published_time"
            content={structuredData.datePublished}
          ></meta>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </React.Fragment>
      )}
    </Head>
  );
};

export default HeadMetaTags;
