import Image from "next/image";
import Link from "next/link";
import React from "react";

const pageProducts = async () => {
  const res = await fetch("https://dummyjson.com/posts");

  const { posts } = await res.json();

  return (
    <div className="flex flex-col space-y-3">
      <h1 className="font-bold text-2xl py-4">Blog Posts</h1>
      {posts.map((item: any, index: number) => {
        return (
          <Link href={`/posts/${index + 1}`} key={index}>
            <div className="w-full flex">
              <h2 className="text-lg font-bold">{item.title}</h2>
            </div>
            <div className="flex flex-row space-x-2">
              {item.tags.map((item: any, index: number) => {
                return (
                  <div key={index}>
                    <span className="[word-wrap: break-word]  flex h-[24px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[12px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default pageProducts;
