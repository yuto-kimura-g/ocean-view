const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-4/5 h-screen mx-auto">
      <div className="text-center text-5xl text-blue-700 font-bold p-10">
        Loading ...
      </div>
      <div className="text-center text-3xl text-blue-700 font-bold">
        It may take a few seconds to load the 3D graphic library. <br />
        Just a moment, please ;)
      </div>
    </div>
  );
};

export default Loading;
