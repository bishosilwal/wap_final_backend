import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useGlobalContext } from "src/data/GlobalContext";
import { GET_TRENDING_PATH } from "src/utils/apiList";
import apiService from "src/utils/apiService";

library.add(faHeart);

function RightSideBar() {
  const globalContext = useGlobalContext();
  const dispatch = useDispatch();
  const trendingPosts = globalContext.trending;

  React.useEffect(() => {
    apiService(GET_TRENDING_PATH)
      .then((res) => {
        dispatch({
          type: "receivedTrending",
          posts: res.data.data,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    // <!-- Right Sidebar -->
    <div className="w-80 p-4">
      {/* <!-- Search Bar --> */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      {/* <!-- Trending Topics --> */}
      <div className="bg-white rounded-lg shadow-lg mb-4">
        <h2 className="text-lg font-semibold p-4 border-b">Top pick for you</h2>
        <ul className="divide-y">
          {trendingPosts.map((p) => {
            return (
              <li className="p-4 hover:bg-gray-100">
                <span className="text-gray-500 text-sm">{p.created_at}</span>
                <h3 className="font-semibold">{p.title}</h3>
                <span className="text-gray-500 text-sm">
                  {p.votes}&nbsp;
                  <FontAwesomeIcon icon="heart" className="text-cyan-700" />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RightSideBar;
