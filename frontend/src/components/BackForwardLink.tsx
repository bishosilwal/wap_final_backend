import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useGlobalContext } from "src/data/GlobalContext";
import { GET_ALL_POST_PATH } from "src/utils/apiList";
import apiService from "src/utils/apiService";

// Add the imported icons to the library
library.add(faArrowLeft, faArrowRight);

function BackForwardLink() {
  const dispatch = useDispatch();
  const globalContext = useGlobalContext();
  let currentDate = globalContext.currentDate;

  const backHandler = (e: any) => {
    currentDate.setDate(currentDate.getDate() - 1);
    apiService
      .get(GET_ALL_POST_PATH, {
        params: {
          current_date: currentDate
            .toISOString()
            .slice(0, 19)
            .replace("T", " "),
        },
      })
      .then((res) => {
        dispatch({
          type: "getAll",
          posts: res.data.posts,
          currentDate: currentDate,
        });
      })
      .catch((e) => console.error(e));
  };

  const forwardHandler = (e: any) => {
    currentDate.setDate(currentDate.getDate() + 1);
    apiService
      .get(GET_ALL_POST_PATH, {
        params: {
          current_date: currentDate
            .toISOString()
            .slice(0, 19)
            .replace("T", " "),
        },
      })
      .then((res) => {
        dispatch({
          type: "getAll",
          posts: res.data.posts,
          currentDate: currentDate,
        });
      })
      .catch((e) => console.error(e));
  };

  let isForwardVisible =
    currentDate.toDateString() >= new Date().toDateString() ? "hidden" : "";
  return (
    <div className="flex justify-between p-3 text-cyan-700">
      <div
        className="group relative hover:cursor-pointer"
        onClick={backHandler}
      >
        <FontAwesomeIcon icon="arrow-left" />
        <span className="pointer-events-none text-sm text-gray-500 absolute -top-4 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100">
          Back
        </span>
      </div>
      <div
        className={"group relative hover:cursor-pointer " + isForwardVisible}
        onClick={forwardHandler}
      >
        <FontAwesomeIcon icon="arrow-right" />
        <span className="pointer-events-none text-sm text-gray-500 absolute -top-4 -left-5 w-max opacity-0 transition-opacity group-hover:opacity-100">
          Forward
        </span>
      </div>
    </div>
  );
}

export default BackForwardLink;
