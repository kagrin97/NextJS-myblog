export interface Post {
  date: string;
  title: string;
  description: string;
  _raw: {
    flattenedPath: string;
  };
  _id: string;
}
