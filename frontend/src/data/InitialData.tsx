import generateInitialData from "./database";

export interface PostType {
  id: number | null;
  title: string;
  body: string;
  votes: number;
}

export interface AppDataType {
  posts: PostType[];
}

const initialData: AppDataType = {
  posts: generateInitialData() as PostType[],
};

export default initialData;
