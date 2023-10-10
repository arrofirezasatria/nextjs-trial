import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="font-bold text-2xl py-4">Blog Posts</h1>

      {Array(10)
        .fill(0)
        .map((item, index) => {
          return (
            <>
              <div className="w-full flex">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </div>
              <div className="flex flex-row space-x-2">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default loading;
