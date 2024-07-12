function RightSideBar() {
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
          <li className="p-4 hover:bg-gray-100">
            <span className="text-gray-500 text-sm">12 july,2024</span>
            <h3 className="font-semibold">#ExampleTrend1</h3>
            <span className="text-gray-500 text-sm">10.2K </span>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <span className="text-gray-500 text-sm">12 july,2024</span>
            <h3 className="font-semibold">#ExampleTrend2</h3>
            <span className="text-gray-500 text-sm">8.5K</span>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <span className="text-gray-500 text-sm">12 july,2024</span>
            <h3 className="font-semibold">#ExampleTrend3</h3>
            <span className="text-gray-500 text-sm">6.7K</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightSideBar;
