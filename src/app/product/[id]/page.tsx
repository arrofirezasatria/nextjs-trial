import React from "react";

interface Product {
  id: number;
  title: string;
}

export async function generateStaticParams() {
  const products = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  return products.products.map((product: { id: number; title: string }) => ({
    slug: product.id,
  }));
}

const page = async ({ params }: { params: { id: number } }) => {
  const product = await fetch(
    `https://dummyjson.com/products/${params.id}`
  ).then((res) => res.json());

  return <div>{product.title}</div>;
};

export default page;
