import React from "react";

const loading = () => {
  return (
    // <div>
    //   {/* ....loading */}
    //   <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    //   <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    //   <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    //   <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    // </div>
    <div>
      <div className="my-4">
        <div className="flex flex-row">
          <div className="w-10 h-10 rounded-full relative overflow-hidden bg-gray-200 mr-2">
            {/* <Image src={user.image} fill alt="" /> */}
            <div className="flex items-center justify-center  mb-4 bg-gray-300 rounded dark:bg-gray-700"></div>
          </div>
          <div className="flex flex-col ml-0.5">
            <div className="pt-1">
              {/* by */}
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
              <span className="text-md font-bold leading-none ">
                {/* {" " + user.firstName} */}
              </span>
            </div>
            <div className="mb-2">
              {/* <p className="text-[12px] leading-none ">{"Posted on Oct 8"}</p> */}
              <div className="h-1.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
            </div>
          </div>
        </div>

        <h1 className="font-bold text-2xl">
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-[260px] mb-4"></div>
        </h1>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-2">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          </div>
          <div>
            <span className="text-[12px]">
              {/* {post.reactions + " • " + "view"} */}
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-4"></div>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
      </div>
    </div>
  );
};

export default loading;
