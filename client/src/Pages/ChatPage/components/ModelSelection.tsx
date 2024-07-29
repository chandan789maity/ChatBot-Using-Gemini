

const ModelSelection = () => {
  return (
    <div>
        <div className="w-2/3 bg-transparent max-sm:mt-24 flex max-sm:w-full gap-3 mx-auto">
            <div className="cursor-pointer flex gap-2 items-center h-14 bg-slate-50 shadow-2xl px-4 py-5 rounded-3xl dark:bg-sky-500 dark:bg-opacity-10">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                focusable="false"
                className="bg-[#d4d4ff] rounded-full p-1 max-sm:p-1 text-blue-700"
                height="2.2em"
                width="2.2em"
                max-sm:height="1em"
                max-sm:width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"></path>
              </svg>
              <h1 className="text-xl font-semibold max-sm:text-sm max-sm:pt-0 max-sm:font-semibold dark:text-sky-200">
                Gemini
              </h1>
            </div>
            {/* //Another   */}
            <div className="cursor-pointer flex gap-2 items-center h-14 bg-slate-50 shadow-2xl px-4 py-5 rounded-3xl dark:bg-sky-500 dark:bg-opacity-10">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                focusable="false"
                className="bg-[#d4d4ff] rounded-full p-1 max-sm:p-1 text-blue-700"
                height="2.2em"
                width="2.2em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"></path>
              </svg>
              <h1 className="text-xl font-semibold max-sm:text-sm max-sm:pt-0 max-sm:font-semibold dark:text-sky-200">
                Llama3
              </h1>
            </div>
          </div>
      
    </div>
  )
}

export default ModelSelection
