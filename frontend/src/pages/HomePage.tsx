import React from "react";
import { useGlobalContext } from "../data/GlobalContext";
import MenuBar from "src/components/MenuBar";
import LeftSideBar from "src/components/LeftSideBar";
import RightSideBar from "src/components/RightSideBar";
import { PostCardList } from "src/components/PostCardList";
import CreatePostForm from "src/components/CreatePostForm";

function HomePage() {
  const globalContext = useGlobalContext();
  return (
    <>
      <MenuBar />
      <div className="grid grid-cols-4" style={{ height: "100vh" }}>
        <LeftSideBar />
        <div className="grid col-span-2 px-5 py-5 overflow-y-scroll">
          <CreatePostForm />
          <PostCardList />
        </div>
        <div className="shadow-lg p-5">
          <RightSideBar />
        </div>
      </div>
    </>
  );
}

export default HomePage;
