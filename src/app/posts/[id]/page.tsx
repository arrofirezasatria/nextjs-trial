// import waitUntil from "@/utils/wait";
import sleep from "@/utils/sleep";
import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  title: string;
}

export async function generateStaticParams() {
  const products = await fetch("https://dummyjson.com/posts").then((res) =>
    res.json()
  );

  return products.posts.map((product: { id: number; title: string }) => ({
    slug: product.id,
  }));
}

const page = async ({ params }: { params: { id: number } }) => {
  const post = await fetch(`https://dummyjson.com/posts/${params.id}`).then(
    async (res) => {
      await sleep(1000);
      return res.json();
    }
  );

  const user = await fetch(`https://dummyjson.com/user/${post.userId}`).then(
    async (res) => {
      await sleep(1000);
      return res.json();
    }
  );

  return (
    <div>
      <div className="my-4">
        <div className="flex flex-row">
          <div className="w-10 h-10 rounded-full relative overflow-hidden">
            <Image src={user.image} fill alt="" />
          </div>
          <div className="flex flex-col ml-0.5">
            <div className="pt-1">
              by
              <span className="text-md font-bold leading-none ">
                {" " + user.firstName}
              </span>
            </div>
            <div className="mb-2">
              <p className="text-[12px] leading-none ">{"Posted on Oct 8"}</p>
            </div>
          </div>
        </div>

        <h1 className="font-bold text-2xl">{post.title}</h1>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-2">
            {post.tags.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <span className="[word-wrap: break-word]  flex h-[24px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[12px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
          <div>
            <span className="text-[12px]">
              {post.reactions + " • " + "view"}
            </span>
          </div>
        </div>
      </div>
      <div>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default page;
