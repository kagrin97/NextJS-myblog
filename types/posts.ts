export interface Post {
  date: string;
  title: string;
  description: string;
  _raw: {
    flattenedPath: string;
    sourceFileDir: string;
  };
  _id: string;
  slug: string;
  type: string;
}
