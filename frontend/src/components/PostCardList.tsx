import * as React from "react";
import { useGlobalContext } from "src/data/GlobalContext";
import { PostCard } from "./PostCard";

export function PostCardList() {
  const globalContext = useGlobalContext();
  const posts = globalContext.posts;
  // const [updateCard, setUpdateCard] = React.useState(false);
  // console.log(posts);
  // React.useEffect(() => {
  //   setUpdateCard(true);
  //   return () => {};
  // }, [globalContext.posts]);

  return (
    <div className="flex flex-col gap-3">
      {posts.map((p) => {
        return <PostCard post={p} key={p.id} />;
      })}
    </div>
  );
}
