import Image from "next/image";
import Link from "next/link";
import React from "react";

const pageProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");

  const { products } = await res.json();

  return (
    <div className="">
      {products.map((item: any, index: number) => {
        return (
          <Link href={`/product/${index}`} key={index}>
            <div className="w-full flex">
              <div className="w-32 h-32 bg-red relative">
                <Image src={item.images[0]} fill alt="asd" />
              </div>
              {item.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default pageProducts;
