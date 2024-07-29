import { ChakraNextAvatar } from "./Profile";
import SearchBar from "./SearchBar";

interface TopNavbarProps {
  toggleSidebar: () => void;
}

const TopNavbar = ({ toggleSidebar }: TopNavbarProps) => {
  return (
    <header className="bg-slate-100 backdrop-blur-lg rounded-2xl dark:bg-blue-900 dark:bg-opacity-45 dark:backdrop-blur-2xl ml-80 max-sm:mx-0  mt-5 mr-4 w-full  bg-opacity-60 pr-4 fixed max-sm:mt-1 max-sm:p-1">
      <div className="flex items-center p-2 max-sm:flex-col">
        <h1 className="text-xl font-bold text-blue-800 mx-6 dark:text-slate-100">
          MULTER AI
        </h1>
        <div className="w-1/4 bg-slate-50 h-2/3 py-2 px-2 rounded-full flex max-sm:w-full dark:bg-indigo-800 align-middle">
          <SearchBar />
          <button
            onClick={toggleSidebar}
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div>
            <ChakraNextAvatar name="AC" showBorder width="40px" height="40px" />
          </div>
          {/* //Serarch box */}
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
