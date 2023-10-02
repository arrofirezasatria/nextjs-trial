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

const page = ({ params }: { params: { slug: string } }) => {
  return <div>page</div>;
};

export default page;
