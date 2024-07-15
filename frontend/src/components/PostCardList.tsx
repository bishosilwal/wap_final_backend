import * as React from "react";
import { useDispatch, useGlobalContext } from "src/data/GlobalContext";
import { PostCard } from "./PostCard";
import apiService from "src/utils/apiService";

const GET_POST_PATH = "/posts";

export function PostCardList() {
  const globalContext = useGlobalContext();
  const dispatch = useDispatch();

  const posts = globalContext.posts;
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (loading) {
      setLoading(false);
      apiService
        .get(GET_POST_PATH)
        .then((res) => {
          console.log(res);
          dispatch({
            type: "getAll",
            posts: res.data.posts,
          });
        })
        .catch((e) => console.error(e));
    }
    return () => {};
  }, []);

  if (loading) {
    return <div className="flex justify-center">LOADING...</div>;
  } else {
    return (
      <div className="flex flex-col gap-3">
        {posts.data.map((p) => {
          return <PostCard post={p} key={p.id} />;
        })}
      </div>
    );
  }
}
