import * as Articles from "contentlayer/generated";

const categoryMap = {
  js: Articles.allJs,
  types: Articles.allTypes,
  next: Articles.allNexts,
  react: Articles.allReacts,
  other: Articles.allOthers,
  algorithm: Articles.allAlgorithms,
  backend: Articles.allBackEnds,
  db: Articles.allDataBases,
  server: Articles.allServers,
  git: Articles.allGits,
  article: Articles.allArticles,
};

type CategoryTypes = keyof typeof categoryMap;

export const getCategoryDocs = (category: CategoryTypes | string) => {
  if (category in categoryMap) {
    return categoryMap[category as CategoryTypes];
  }
};
