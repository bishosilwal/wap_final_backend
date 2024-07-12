import React from "react";
import { useGlobalContext } from "../data/GlobalContext";

function HomePage() {
  const globalContext = useGlobalContext();
  const posts = globalContext.posts;
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        {posts?.map((p) => {
          return <li>{p.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default HomePage;
