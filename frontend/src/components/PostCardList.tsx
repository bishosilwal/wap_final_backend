import * as React from "react";
import { useDispatch, useGlobalContext } from "src/data/GlobalContext";
import { PostCard } from "./PostCard";
import apiService from "src/utils/apiService";
import { GET_ALL_POST_PATH } from "src/utils/apiList";

export function PostCardList() {
  const globalContext = useGlobalContext();
  const dispatch = useDispatch();

  let posts = globalContext.posts;
  const [loading, setLoading] = React.useState(true);
  posts = {
    ...posts,
    data: posts.data.sort((a, b) => b.votes - a.votes),
  };

  React.useEffect(() => {
    if (loading) {
      apiService
        .get(GET_ALL_POST_PATH)
        .then((res) => {
          setLoading(false);
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
