import * as React from "react";
import { useDispatch } from "src/data/GlobalContext";
import { CREATE_POST_PATH } from "src/utils/apiList";
import apiService from "src/utils/apiService";

function CreatePostForm() {
  const [title, setTitle] = React.useState<string>("");
  const [body, setBody] = React.useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();

    apiService
      .post(CREATE_POST_PATH, {
        post: {
          title: title,
          body: body,
        },
      })
      .then((res) => {
        dispatch({
          type: "create",
          post: res.data.data,
        });
        setTitle("");
        setBody("");
      })
      .catch((e) => console.log(e));

  };

  const handleChange = (e: any) => {
    if (e.currentTarget.getAttribute("name") === "title") {
      setTitle(e.target.value || "");
    } else {
      setBody(e.target.value || "");
    }
  };

  return (
    <div className="bg-white h-fit rounded-lg shadow-lg max-w-full min-w-full mb-3 hover:bg-gray-100 hover:shadow-gray-300">
      <h2 className="text-xl p-5 font-semibold text-gray-800">
        What's On Your Mind Today?
      </h2>
      <form
        id="create-post-form"
        className="space-y-6 px-5 pb-5"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <div>
          <textarea
            id="body"
            name="body"
            rows={4}
            value={body}
            onChange={handleChange}
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
