function MenuBar() {
  return (
    <header className="flex z-10 bg-cyan-800 h-16 sticky top-0 p-3 px-5 justify-between items-center">
      <label className="text-white text-lg">Daily Diary Blog</label>
      <button className="text-white md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        &nbsp;ds
      </button>
    </header>
  );
}

export default MenuBar;
