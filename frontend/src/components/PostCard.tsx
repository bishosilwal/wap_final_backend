import * as React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the specific icons you want to use
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

// Add the imported icons to the library
library.add(faThumbsUp, faThumbsDown);

export function PostCard() {
  return (
    <div className="w-100 relative">
      <div className="bg-white shadow-lg rounded-lg p-4 mb-1">
        <div className="flex items-start">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile Picture"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-gray-500 text-sm">@johndoe · 2h</p>
              </div>
              <div>
                <svg
                  className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="mt-2 text-gray-700">
              This is an example of a Twitter-like post card using Tailwind CSS.
              It includes user information, post content, and action buttons.
            </p>
            <div className="flex justify-between items-center mt-4 text-gray-500">
              <div className="flex items-center space-x-2 cursor-pointer hover:text-red-500">
                Votes
                <span className="pl-3">56</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-red-500">
                <FontAwesomeIcon icon="thumbs-up" size="1x" />
                <span>Up Vote</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer hover:text-red-500">
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
