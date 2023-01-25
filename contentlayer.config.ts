import { defineDocumentType, makeSource } from "contentlayer/source-files";

import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";

const configDocumentType = (docName: string, filePath: string) => {
  return defineDocumentType(() => ({
    name: docName,
    contentType: "mdx",
    filePathPattern: `${filePath}/*.mdx`,
    fields: {
      title: { type: "string", required: true },
      date: { type: "string", required: true },
      description: { type: "string", required: true },
      category: { type: "string", required: true },
    },
    computedFields: {
      slug: {
        type: "string",
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
      },
    },
  }));
};
const Js = configDocumentType("Js", "js");
const Git = configDocumentType("Git", "git");
const Next = configDocumentType("Next", "next");
const Other = configDocumentType("Other", "other");
const React = configDocumentType("React", "react");
const Types = configDocumentType("Types", "types");
const Algorithm = configDocumentType("Algorithm", "algorithm");
const DataBase = configDocumentType("DataBase", "db");

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Js, Git, Next, Other, React, Types, Algorithm, DataBase],
  mdx: {
    rehypePlugins: [rehypeCodeTitles, rehypePrism],
  },
});
