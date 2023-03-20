import * as Articles from "contentlayer/generated";
import type { DocumentTypes } from ".contentlayer/generated/types";

export const checkCategory = (
  category: string,
  sortDocsOrgetArticle: (docs: DocumentTypes[]) => void
) => {
  switch (category) {
    case "js":
      sortDocsOrgetArticle(Articles.allJs);
      break;
    case "types":
      sortDocsOrgetArticle(Articles.allTypes);
      break;
    case "next":
      sortDocsOrgetArticle(Articles.allNexts);
      break;
    case "react":
      sortDocsOrgetArticle(Articles.allReacts);
      break;
    case "other":
      sortDocsOrgetArticle(Articles.allOthers);
      break;
    case "algorithm":
      sortDocsOrgetArticle(Articles.allAlgorithms);
      break;
    case "backend":
      sortDocsOrgetArticle(Articles.allBackEnds);
      break;
    case "db":
      sortDocsOrgetArticle(Articles.allDataBases);
      break;
    case "server":
      sortDocsOrgetArticle(Articles.allServers);
      break;
    case "git":
      sortDocsOrgetArticle(Articles.allGits);
      break;
    case "article":
      sortDocsOrgetArticle(Articles.allArticles);
      break;
  }
};
