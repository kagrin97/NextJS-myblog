import type { Post } from "types/posts";

export interface MetadataType {
  type: string;
  title: string;
  description: string;
  author: string;
  url: string;
  date?: string;
  image: string;
}

export const metadata: MetadataType = {
  type: "blog",
  title: "KANG BLOG",
  description: "개발자로서의 개발을 위한 개발생활",
  author: "kagrin97",
  url: "https://kagrin97-blog.vercel.app/",
  image: "/imgs/배너.jpg",
};

export interface StructuredDataType {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  author: {
    "@type": string;
    name: string;
  };
  keywords: string;
  url: string;
  datePublished?: string;
  publisher: {
    "@type": string;
    name: string;
  };
  articleSection: string;
  articleTag: string;
  image: string;
  ogType: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

const createCustomMeta = (post: Post) => {
  return {
    ...metadata,
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
    url: post._raw.flattenedPath,
  };
};

const createStructuredData = (post?: Post) => {
  let customMeta;
  if (post) {
    customMeta = createCustomMeta(post);
  }

  const structuredData: StructuredDataType = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metadata.title,
    description: metadata.description,
    author: {
      "@type": "Person",
      name: metadata.author,
    },
    keywords: "blog, react, javascript, algorithm",
    url: metadata.url,
    publisher: {
      "@type": "Organization",
      name: "KANG BLOG",
    },
    articleSection: "Technology",
    articleTag: "Programming",

    image: metadata.image,
    ogType: "article",
    ogTitle: metadata.title,
    ogDescription: metadata.description,
    ogImage: metadata.image,
    twitterCard: "summary_large_image",
    twitterTitle: metadata.title,
    twitterDescription: metadata.description,
    twitterImage: metadata.image,
  };

  if (customMeta) {
    structuredData.headline = customMeta.title;
    structuredData.description = customMeta.description;
    structuredData.datePublished = customMeta.date;
    structuredData.url = structuredData.url + customMeta.url;
    structuredData.ogTitle = customMeta.title;
    structuredData.ogDescription = customMeta.description;
    structuredData.twitterTitle = customMeta.title;
    structuredData.twitterDescription = customMeta.description;
  }

  return structuredData;
};

export default createStructuredData;
