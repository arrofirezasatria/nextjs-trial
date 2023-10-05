import Link from "next/link";
import React from "react";

const pageProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");

  const { products } = await res.json();

  return (
    <div className="">
      {products.map((item: any, index: number) => {
        return (
          <div key={index}>
            <Link href={`/product/${index}`}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default pageProducts;
