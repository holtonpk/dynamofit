import React, { useState, useEffect } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { useCart } from "../../Contexts/CartContext";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
const Header = () => {
  const { showCartPreview, setShowCartPreview, cartTotalQuantity } = useCart();
  const toggleCart = () => {
    setShowCartPreview(!showCartPreview);
  };

  return (
    <>
      <div className="w-full bg-main-200 h-fit py-2 flex items justify-center items-center uppercase font-bold">
        🚀 Order now and get free shipping! 🚀
      </div>

      <header className="bg-[#1f2625]  sticky  transition-all duration-300 h-20  z-10 blurBack top-0 w-full  text-white  flex justify-between items-center px-8 ">
        <div className="w-[150px] aspect-[163/575] rounded-full relative">
          <Image
            alt="logo"
            src={logo}
            fill
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <div className="flex items-center gap-4 w-fit">
          {/* <button className="rounded-full flex items-center justify-center p-2 border-2 border-white md:h-12 md:w-12 h-10 w-10">
            <IoMdHelp className="md:h-6 md:w-6 fill-white" />
          </button> */}
          <button
            onClick={toggleCart}
            className="rounded-full relative flex items-center justify-center p-2 border-2 border-white md:h-12 md:w-12 h-10 w-10"
          >
            {cartTotalQuantity > 0 && (
              <span className="absolute top-0 bg-main-500 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 p-1 text-[12px] flex items-center justify-center text-white bg-main-500 rounded-full">
                {cartTotalQuantity}
              </span>
            )}
            <FaShoppingBag className="md:h-6 md:w-6 fill-white" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
