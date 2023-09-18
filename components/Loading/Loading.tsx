import React from "react";

const Loading = () => {
  const count = 6;
  return (
    <>
      <div className=" shadow rounded-md p-4 bg-white px-auto py-20 w-full min-h-screen mx-auto ">
        <div className="animate-pulse flex flex-col items-center gap-10 w-full">
          <h1 className="w-[250px] rounded-lg h-6 bg-gray-500"></h1>
          <h1 className="w-[80%] rounded-lg h-12 bg-gray-500"></h1>
          <div className="flex flex-col gap-11 items-center">
            <div className="h-40 w-40 rounded-full bg-gray-500"></div>
            <div className="flex justify-evenly gap-8">
              <div className="h-40 w-40 rounded-full bg-gray-500"></div>
              <div className="h-40 w-40 rounded-full bg-gray-500"></div>
              <div className="h-40 w-40 rounded-full bg-gray-500"></div>
              <div className="h-40 w-40 rounded-full bg-gray-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-4 w-full px-10 mt-7 gap-5">
            <div className="flex justify-center items-center flex-col bg-gray-500 gap-4 py-7 rounded-md">
              <h1 className="bg-gray-700 w-20 h-5 rounded-xl"></h1>
              <h1 className="bg-gray-700 w-[170px] h-7 rounded-xl"></h1>
            </div>
            <div className="flex justify-center items-center flex-col bg-gray-500 gap-4 py-7 rounded-md">
              <h1 className="bg-gray-700 w-20 h-5 rounded-xl"></h1>
              <h1 className="bg-gray-700 w-[170px] h-7 rounded-xl"></h1>
            </div>
            <div className="flex justify-center items-center flex-col bg-gray-500 gap-4 py-7 rounded-md">
              <h1 className="bg-gray-700 w-20 h-5 rounded-xl"></h1>
              <h1 className="bg-gray-700 w-[170px] h-7 rounded-xl"></h1>
            </div>
            <div className="flex justify-center items-center flex-col bg-gray-500 gap-4 py-7 rounded-md">
              <h1 className="bg-gray-700 w-20 h-5 rounded-xl"></h1>
              <h1 className="bg-gray-700 w-[170px] h-7 rounded-xl"></h1>
            </div>
            <div className="flex justify-center items-center flex-col bg-gray-500 gap-4 py-7 rounded-md">
              <h1 className="bg-gray-700 w-20 h-5 rounded-xl"></h1>
              <h1 className="bg-gray-700 w-[170px] h-7 rounded-xl"></h1>
            </div>
            <div className="flex justify-center items-center flex-col bg-gray-500 gap-4 py-7 rounded-md">
              <h1 className="bg-gray-700 w-20 h-5 rounded-xl"></h1>
              <h1 className="bg-gray-700 w-[170px] h-7 rounded-xl"></h1>
            </div>
            <div className="flex justify-center items-center flex-col bg-gray-500 gap-4 py-7 rounded-md">
              <h1 className="bg-gray-700 w-20 h-5 rounded-xl"></h1>
              <h1 className="bg-gray-700 w-[170px] h-7 rounded-xl"></h1>
            </div>
            <div className="flex justify-center items-center flex-col bg-gray-500 gap-4 py-7 rounded-md">
              <h1 className="bg-gray-700 w-20 h-5 rounded-xl"></h1>
              <h1 className="bg-gray-700 w-[170px] h-7 rounded-xl"></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
