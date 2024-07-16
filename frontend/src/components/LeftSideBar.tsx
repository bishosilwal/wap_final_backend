import { Link } from "react-router-dom";

function LeftSideBar() {
  return (
    <div className="flex flex-col md:h-screen bg-white shadow-lg md:p-6 p-4">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={require("../images/bisho.png")}
          alt="Profile Picture"
          className="w-24 h-24 rounded-full"
        />
        <div className="text-center">
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-gray-500">@johndoe</p>
        </div>
      </div>
      <nav className="mt-6">
        <ul className="space-y-4">
          <li>
            <Link
              to="/about-us"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 11h16M4 15h16"
                ></path>
              </svg>
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LeftSideBar;
