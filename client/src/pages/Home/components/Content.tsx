
const Content = () => {
  return (
    <div>
      <div className="bg-indigo-950  rounded-3xl bg-opacity-25 filter backdrop-blur-xl py-8 px-8 justify-center flex flex-col">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Welcome to PChat Platform
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center mx-auto">
          Experience the best question and answer platform with PChat.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 mx-auto">
          <button className="px-4 py-2 bg-purple-900 hover:bg-fuchsia-800 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Start Chat
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-violet-600  text-white transition duration-200 rounded-lg">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
