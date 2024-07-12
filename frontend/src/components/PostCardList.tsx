import { useGlobalContext } from "src/data/GlobalContext";
import { PostCard } from "./PostCard";

export function PostCardList() {
  const globalContext = useGlobalContext();
  const posts = globalContext.posts;

  return (
    <>
      {posts.map((p) => {
        return <PostCard />;
      })}
    </>
  );
}
