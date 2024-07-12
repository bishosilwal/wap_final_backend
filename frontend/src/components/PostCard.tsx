import * as React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the specific icons you want to use
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { PostType } from "src/data/InitialData";

// Add the imported icons to the library
library.add(faThumbsUp, faThumbsDown);

export function PostCard({ post }: { post: PostType }) {
  return (
    <div className="w-100 relative hover:shadow-lg hover:shadow-cyan-600 border">
      <div className="bg-white shadow-md rounded-lg py-4 ">
        <div className="flex items-start">
          <div className="flex-1">
            <div className="flex px-4 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile Picture"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex justify-between items-center  pb-1 mb-2">
                <div>
                  <h2 className="text-lg font-semibold">John Doe</h2>
                  <p className="text-gray-500 text-sm">
                    @johndoe · {post.created_at?.toDateString()}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-4 flex-col">
              <p className="text-lg font-semibold">{post.title}</p>
              <p className="mt-2 text-gray-700 text-sm">{post.body}</p>
            </div>
            <div className="flex justify-between items-center px-4 mt-4 text-gray-500">
              <div className="flex items-center space-x-2 cursor-pointer hover:text-cyan-700">
                Votes
                <span className="pl-3">{post.votes}</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-green-700">
                <FontAwesomeIcon icon="thumbs-up" size="1x" />
                <span>Up Vote</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-red-700">
                <FontAwesomeIcon icon="thumbs-down" size="1x" />

                <span>Down Vote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
