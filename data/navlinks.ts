import {
  allAlgorithms,
  allGits,
  allJs,
  allNexts,
  allOthers,
  allReacts,
  allTypes,
  allDataBases,
  allBackEnds,
  allServers,
  allArticles,
} from "contentlayer/generated";

export interface Navlinks {
  title: string;
  link: string;
  length?: number;
}

const navlinks: Navlinks[] = [
  { title: "포트폴리오 🧑🏻‍💻", link: "https://portfolio-kagrin97.vercel.app/" },
  { title: "JavaScript", link: "/js", length: allJs.length },
  { title: "TypeScript", link: "/types", length: allTypes.length },
  { title: "NextJS", link: "/next", length: allNexts.length },
  { title: "React", link: "/react", length: allReacts.length },
  { title: "Git", link: "/git", length: allGits.length },
  { title: "Other", link: "/other", length: allOthers.length },
  { title: "Algorithm", link: "/algorithm", length: allAlgorithms.length },
  { title: "BackEnd", link: "/backend", length: allBackEnds.length },
  { title: "DataBase", link: "/db", length: allDataBases.length },
  { title: "Server", link: "/server", length: allServers.length },
  { title: "Article", link: "/article", length: allArticles.length },
];

export default navlinks;
