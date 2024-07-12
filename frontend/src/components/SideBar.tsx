function SideBar() {
  return (
    <div className="h-screen bg-white shadow-lg">
      <div className="p-6">
        {/* <!-- Profile Section --> */}
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile Picture"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-gray-500">@johndoe</p>
          </div>
        </div>
        {/* <!-- Navigation Links --> */}
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 7h6M3 11h6m-6 4h6m7-8h6M13 7h6m-6 4h6m-6 4h6"
                  ></path>
                </svg>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 7h16M4 11h16M4 15h16"
                  ></path>
                </svg>
                <span>Lists</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
                <span>Profile</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
