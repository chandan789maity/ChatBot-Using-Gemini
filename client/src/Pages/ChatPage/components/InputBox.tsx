const InputBox = () => {
  return (
    <>
      <form className="flex items-center mt-48 justify-center max-sm:w-full">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="voice-search"
            className=" rounded-2xl bg-transparent border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4  dark:bg-transparent dark:placeholder-gray-400 dark:text-white"
            placeholder="Ask me Anything"
            required
          />
        </div>
        <button
          type="submit"
          className=" max-sm:px-3 ml-5 inline-flex items-center p-4 px-10 text-sm font-medium text-white bg-blue-700 rounded-2xl border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default InputBox;
