import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../../Contexts/CartContext";
import Link from "next/link";
import { BsTrash3 } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { formatPrice } from "../productPage/productPanel/index";
import { useRouter } from "next/router";

const CartPreview = () => {
  const {
    showCartPreview,
    setShowCartPreview,
    cart,
    updateQuantity,
    removeItem,
    cartTotalPrice,
    cartTotalQuantity,
    checkoutObject,
  } = useCart();

  console.log("cart==>", cart);

  const toggleCart = () => {
    setShowCartPreview(!showCartPreview);
  };
  const router = useRouter();

  const goToCheckout = async () => {
    const checkoutLink = await getCheckoutLink(checkoutObject);
    console.log(checkoutLink);
    router.push(checkoutLink);
  };

  return (
    <>
      {showCartPreview && (
        <>
          <div
            onClick={toggleCart}
            className="fixed z-20 bg-black/50 w-screen h-screen top-0 left-0 cursor-pointer "
          />
          <div className="z-30 rounded-t-xl md:rounded-none  fixed md:w-1/3 bottom-0  md:top-0 md:-translate-y-0 w-full md:left-full  md:-translate-x-full md:h-screen h-[80vh] bg-white  cart-preview-enter">
            <div className="w-full mt-3 text-2xl h-[5%] flex items-center justify-center p-3 text-black  relative">
              Your Bag
              <button
                onClick={toggleCart}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full "
              >
                <GrClose className="h-6 w-6 fill-black" />
              </button>
            </div>

            {cart.length > 0 ? (
              <div className=" relative h-[95%] flex flex-col justify-between">
                <div className="flex-fit overflow-scroll">
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex flex-col gap-3 w-full p-4 bg-black/5 items-center rounded-md">
                      <h1 className=" text-xl text-main-600">Summary</h1>
                      <div className="flex justify-between w-full">
                        <h1 className="text-base text-black/60">
                          {cartTotalQuantity} products
                        </h1>
                        <h1 className="text-base text-black/60  text-black">
                          {formatPrice(cartTotalPrice) + " USD"}
                        </h1>
                      </div>
                      <div className="flex justify-between w-full">
                        <h1 className="text-lg text-black font-bold">
                          Sub Total
                        </h1>
                        <h1 className="text-lg text-black font-bold">
                          {formatPrice(cartTotalPrice) + " USD"}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="h-fit flex flex-col max-h-[50vh] ">
                    {cart.map((product: any, i: number) => (
                      <div key={i} className="relative shadow-lg ">
                        <div className="p-4 relative flex w-full items-center gap-4">
                          <div className="relative w-1/3 aspect-square bg-black/70 rounded-md overflow-hidden shadow-lg">
                            <Image
                              src={product.image}
                              // alt={product.image.node.altText}
                              alt="image"
                              layout="fill"
                              className="w-full h-full"
                            />
                          </div>
                          <div className="flex flex-col items-start h-fit w-2/3 ">
                            <Link
                              href={
                                "/Product/" +
                                product.title.slice(0, 25).replaceAll(" ", "_")
                              }
                            >
                              <h2 className="text-lg text-black font-f1">
                                {product.title}
                              </h2>
                              <h2 className="text-lg text-black font-bold">
                                {formatPrice(
                                  JSON.stringify(
                                    product.price.amount * product.quantity
                                  )
                                ) + " USD"}
                              </h2>
                            </Link>
                            <div className="flex justify-between items-center w-full mt-3">
                              <button
                                onClick={() => removeItem(product.variantId)}
                                className="rounded-full h-8 w-8 p-1 flex items-center justify-center bg-black/10 hover:bg-black/30"
                              >
                                <BsTrash3 className="h-4 w-4 text-black" />
                              </button>
                              <div className="flex ">
                                <div className="font-bold hover:opacity-50 cursor-pointer  relative">
                                  <label className="flex items-center gap-1 absolute  pointer-events-none text-black">
                                    Qty: {product.quantity}
                                    <IoChevronDown className="h-4 w-4 fill-white" />
                                  </label>

                                  <select
                                    onChange={() =>
                                      updateQuantity(event, product.title)
                                    }
                                    className="bg-transparent text-transparent w-20 cursor-pointer"
                                    name="qtySelect"
                                  >
                                    {[...Array(product.quantityAvailable)].map(
                                      (_: any, index: number) => (
                                        <option
                                          key={index + 1}
                                          value={index + 1}
                                        >
                                          {index + 1}
                                        </option>
                                      )
                                    )}
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full p-6 h-fit relative ">
                  <button
                    onClick={goToCheckout}
                    className=" w-full p-2 text-xl text-white font-bold rounded-full  bg-main-500 hover:bg-black"
                  >
                    Go to Checkout
                  </button>

                  {/* <button className="w-full mt-3 p-2 text-xl text-white font-bold rounded-full bg-gradient-to-r from-main-500 via-main-600  to-main-500 hover:from-main-400 hover:via-main-500  hover:to-main-400 ">
                    Your Bag
                  </button> */}
                </div>
              </div>
            ) : (
              <div className="h-[95%] flex items-center justify-center py-10">
                <div className="flex flex-col gap-4 items-center">
                  <Image
                    priority
                    src="/images/empty-bag.svg"
                    height={150}
                    width={150}
                    alt="Follow us on Twitter"
                  />
                  <h1 className="text-2xl font-bold text-black">
                    Your Bag is Empty
                  </h1>
                  <h1 className="text-base  text-black/70">
                    There are no items in your bag
                  </h1>
                  <button
                    onClick={toggleCart}
                    className="bg-main-600 py-3 px-6 rounded-full w-fit h-fit text-white"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CartPreview;

interface getCheckoutLinkProps {
  checkoutObject: any;
}

export const getCheckoutLink = async (checkoutObject: getCheckoutLinkProps) => {
  try {
    const url = new URL(process.env.URL || "http://localhost:3000");
    url.pathname = "/api/createCheckout";

    const res = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-line-items": JSON.stringify(checkoutObject),
      },
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();
    console.log("data:", data);

    if (
      data &&
      data.checkoutCreate &&
      data.checkoutCreate.checkout &&
      data.checkoutCreate.checkout.webUrl
    ) {
      const checkoutLink = data.checkoutCreate.checkout.webUrl;
      console.log("checkoutLink:", checkoutLink);
      return checkoutLink;
    } else {
      throw new Error("Invalid data format received");
    }
  } catch (error) {
    console.error("Error in getCheckoutLink:", error);
    return null;
    // Handle the error as appropriate, e.g., show an error message to the user
  }
};
