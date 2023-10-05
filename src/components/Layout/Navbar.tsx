import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar justify-center">
      <div className="navbar-center justify-start w-full max-w-3xl space-x-4">
        <div className="flex flex-shrink-0 items-center">
          <Image
            className="h-8 w-auto"
            src={"/mark.svg"}
            alt="Your Company"
            width={500}
            height={500}
          />
        </div>
        <Link href={"/product"} passHref className="btn btn-sm">
          Product
        </Link>
        <Link href={"/product"} passHref className="btn btn-sm">
          Article
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
