const SearchBar = () => {
    return (
      <div className="flex">
        {/* Search box */}
        <div className="rounded-3xl flex px-4 py-3 bg-sky-100 dark:bg-indigo-950 overflow-hidden max-w-md mx-auto font-[sans-serif]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="16px"
            className="fill-gray-600 mr-3 rotate-90 dark:fill-slate-200"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="search"
            placeholder="Search"
            className="w-full outline-none bg-transparent text-gray-600 text-sm"
          />
        </div>
        {/* Toggle */}
        <div className="flex flex-col justify-center mx-2">
          <input
            type="checkbox"
            id="light-switch"
            className="light-switch sr-only"
          />
          <label className="relative cursor-pointer p-2" htmlFor="light-switch">
            <svg
              className="dark:hidden"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-slate-300"
                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
              />
              <path
                className="fill-slate-400"
                d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
              />
            </svg>
            <svg
              className="hidden dark:block"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-slate-400"
                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
              />
              <path
                className="fill-slate-500"
                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
              />
            </svg>
            <span className="sr-only">Switch to light / dark version</span>
          </label>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  