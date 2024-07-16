export interface PostType {
  id: number | null;
  title: string;
  body: string;
  votes: number;
  created_at: string;
}

export interface AppDataType {
  posts: { data: PostType[]; meta: any };
  trending: PostType[];
  currentDate: Date;
}

const initialData: AppDataType = {
  posts: {
    data: [] as PostType[],
    meta: {},
  },
  trending: [] as PostType[],
  currentDate: new Date(),
};

export default initialData;
