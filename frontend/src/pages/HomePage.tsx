import React from "react";
import { useGlobalContext } from "../data/GlobalContext";
import MenuBar from "src/components/MenuBar";
import SideBar from "src/components/SideBar";
import RightSideBar from "src/components/RightSideBar";
import { PostCardList } from "src/components/PostCardList";

function HomePage() {
  const globalContext = useGlobalContext();
  return (
    <>
      <MenuBar />
      <div className="grid grid-cols-4 gap-2" style={{ height: "100vh" }}>
        <SideBar />
        <div className="grid col-span-2 px-5 py-5">
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
