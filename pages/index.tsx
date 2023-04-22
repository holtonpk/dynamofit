import React from "react";
import Image from "next/image";
import logo from "../public/images/logo2.png";
import Link from "next/link";
const index = () => {
  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center flex-col">
      <div className="w-[80%] md:w-[30%] aspect-[1630/575] rounded-full relative ">
        <Image
          alt="logo"
          src={logo}
          fill
          objectFit="contain"
          className="rounded-full"
        />
      </div>

      <Link
        href={"/product/test"}
        className="bg-main-500 text-white text-xl lg:text-3xl py-1 px-4 rounded-md hover:bg-black"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default index;
