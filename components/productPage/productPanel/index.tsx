import React, { useEffect, useRef, useState } from "react";
import Tabs from "./Tabs";
import {
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { useCart } from "@/Contexts/CartContext";
import { TbStarFilled, TbStar, TbStarHalfFilled } from "react-icons/tb";
import Image from "next/image";
import Questions from "../Questions";

import ReturnsImage from "@/public/images/Returns.png";
import ShippingImage from "@/public/images/Shipping.png";
import SupportImage from "@/public/images/Support.png";

const ProductPanel = ({
  product,
  selectedProduct,
  setSelectedProduct,
}: any) => {
  return (
    <div className=" md:h-fit p-10 flex flex-col ">
      <h1 className="text-4xl md:text-5xl  font-sans font-bold text-[#141414]">
        {product.title} ™
      </h1>
      <Reviews product={product} />
      <Price product={product} />
      <ProductDescription />
      <Variants
        product={product}
        setSelectedProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
      />

      <OrderButtons selectedProduct={selectedProduct} />

      <Policy />

      {/* <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl md:text-2xl font-bold mb-4 text-center whitespace-nowrap">
          🎉 Introducing the PocketRoller! 🎉
        </h2>
        <p className="text-base md:text-base mb-4 text-center">
          <span className="font-bold">
            Are you timain of lugging around bulky foam rollers?
          </span>{" "}
          Say hello to your new BFF, the PocketRoller! It's collapsible,
          compact, and oh-so-easy to take with you wherever you go!
        </p>
        <ul className="list-disc pl-6 text-base">
          <li className="mb-2">
            <span className="font-bold">Innovative Design:</span> Collapses from
            13.8" to 5.2" for easy storage & travel, and endures up to 280 lbs
            of deep tissue pressure.
          </li>
          <li className="mb-2">
            <span className="font-bold">Deep Tissue Pressure:</span>{" "}
            High-density, trigger point technology targets deep stretch for
            legs, back, calf, hamstring, and arms.
          </li>
          <li className="mb-2">
            <span className="font-bold">Fascia Recovery Tool:</span> Treats
            myofascial pain, increases flexibility & performance during
            workouts.
          </li>
          <li>
            <span className="font-bold">At-Home Massage:</span> Decrease knots &
            increase comfort with a handheld therapist experience.
          </li>
        </ul>
      </div> */}
      {/* <div className="w-full mt-8">
        <Questions />
      </div> */}

      {/* <Tabs product={product} /> */}
    </div>
  );
};

const OrderButtons = ({ selectedProduct }: any) => {
  const { addToCart, setShowCartPreview } = useCart();

  const [showFixedButton, setShowFixedButton] = useState(false);
  const buyNowStatic = useRef<HTMLButtonElement>(null);
  const addItemToCart = () => {
    addToCart(selectedProduct);
    setShowCartPreview(true);
  };

  // when buyNowStatic is out of frame then show the fixed button

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } =
        buyNowStatic.current?.getBoundingClientRect?.() ?? {};

      if (top === undefined || bottom === undefined) return;

      const windowHeight = window.innerHeight;
      const showFixedButton = top > windowHeight || bottom < 60;

      setShowFixedButton(showFixedButton);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [buyNowStatic]);

  return (
    <>
      {showFixedButton && (
        <div className="fixed w-full md:hidden bottom-0 left-0 flex justify-center items-center z-20">
          <button
            onClick={addItemToCart}
            className=" bounce-top fixed z-20  bottom-2 bg-main-600 hover:bg-black  w-[90%] rounded-md p-3 flex items-center justify-center text-white  text-lg "
          >
            Add To Bag
          </button>
        </div>
      )}
      <div className="flex flex-col gap-4 mt-4">
        <button
          ref={buyNowStatic}
          className=" bg-main-600 hover:bg-black w-full rounded-md p-3 flex items-center justify-center text-white  text-lg "
        >
          Buy Now
        </button>
        <button
          onClick={addItemToCart}
          className="bg-neutral-500 hover:from-neutral-400 hover:via-neutral-500  hover:to-neutral-400  w-full rounded-md p-3 flex items-center justify-center text-white text-lg"
        >
          Add To Bag
        </button>
      </div>
    </>
  );
};

export const Quantity = () => {
  const availableQuantity = 10;
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <h1 className="text-md mt-4">Quantity:</h1>
      <div className=" w-fit flex justify-between  border-black border-[1px]  rounded-md items-center">
        <button
          onClick={decreaseQuantity}
          className={`
          ${quantity === 1 ? "" : ""}
rounded-md h-10 w-10 p-1 flex items-center justify-center text-white font-bold text-lg `}
        >
          <FaMinus className="h-3 w-3 fill-black/70 " />
        </button>
        <input
          className="bg-transparent border-l-[1px] border-r-[1px] border-black text-center w-12 p-3 flex items-center justify-center text-black/70 font-bold text-lg"
          type="number"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          value={quantity}
        />
        <button
          onClick={increaseQuantity}
          className={`
          ${quantity === availableQuantity ? "" : ""}
h-10 w-10 s p-1 flex items-center justify-center text-white font-bold text-lg `}
        >
          <FaPlus className="h-3 w-3 fill-black/70" />
        </button>
      </div>
    </>
  );
};

export default ProductPanel;

const Price = ({ product }: any) => {
  return (
    <div className="flex flex-row gap-4 mt-2">
      <h1 className="text-3xl line-through l text-black/80 decoration-main-500">
        {formatPrice(product.compareAtPrice.amount)}
      </h1>
      <h1 className="text-3xl font-bold text-black/80">
        {formatPrice(product.price.amount)}
      </h1>
      <span className="p-1 px-4  font-bold bg-main-500 text-white rounded-full flex justify-center items-center">
        Sale
      </span>
    </div>
  );
};

const Reviews = ({ product }: any) => {
  const totalReviews = JSON.parse(product.reviews.productReviews.value).length;
  return (
    <div className="flex flex-row items-center gap-1 mt-3">
      {configStars(JSON.parse(product.reviews.ratingAverage).value, 30)}
      <div className=" flex items-center ml-2 cursor-pointer text-black/80">
        {totalReviews} Reviews
      </div>
    </div>
  );
};

export const formatPrice = (price: string) => {
  const parsedPrice = parseFloat(price);

  if (isNaN(parsedPrice)) {
    throw new Error(`Invalid price format: ${price}`);
  }

  return parsedPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const configStars = (ratingAverage: any, size: number) => {
  const ratingTotal = Math.round(ratingAverage * 2) / 2;
  const filledStars = Math.floor(ratingTotal);
  const hasHalfStar = ratingTotal - filledStars !== 0;
  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <FaStar
        style={{ height: size, width: size }}
        className=" text-main-500"
        key={`filled-${i}`}
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt
        style={{ height: size, width: size }}
        className=" text-main-500"
        key="half-filled"
      />
    );
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(
      <FaRegStar
        style={{ height: size, width: size }}
        className=" text-main-500"
        key={`empty-${i}`}
      />
    );
  }
  return <>{stars}</>;
};

const Variants = ({ product, setSelectedProduct, selectedProduct }: any) => {
  console.log(product);

  console.log("selected", selectedProduct);

  const handelSelectVariant = (variant: any) => {
    setSelectedProduct({
      ...selectedProduct,
      variantId: variant.node.id,
      image: variant.node.image.url,
      selectedVariant: variant.node,
    });
  };

  return (
    <div className=" w-full h-fit   ">
      <span className="font-bold flex gap-1 ">
        <h1>COLOR:</h1>
        <h2 className="font-regular text-black/70">
          {" "}
          {selectedProduct.selectedVariant.title}
        </h2>
      </span>
      <div className="min-w-full  w-fit relative  flex flex-wrap   h-full gap-4 ">
        {product.variants.edges.map((image: any, i: number) => (
          <div
            key={i}
            onClick={() => handelSelectVariant(image)}
            className={`
            ${
              selectedProduct.variantId === image.node.id
                ? "border-main-600"
                : "border-transparent"
            }
              bg-black/30 border-2 h-16 md:h-20  relative aspect-square rounded-md cursor-pointer hover:border-main-600`}
          >
            <Image
              src={image.node.image.url}
              alt={image.node.altText}
              layout="fill"
              className="rounded w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductDescription = () => {
  return (
    <div className="flex-col gap-4 flex py-4">
      <p className="text-base md:text-base text-black/80   font-bold">
        Are you timain of lugging around bulky foam rollers? Say hello to your
        new BFF!
      </p>
      <ul className="list-disc pl-6 text-base text-black/80">
        <li className="mb-2">Collapses from 13.8&quot; to 5.2&quot;</li>
        <li className="mb-2">
          High-density, trigger point technology targets deep stretch
        </li>
        <li className="mb-2">
          Treats myofascial pain, increases flexibility & performance
        </li>
      </ul>
    </div>
  );
};

const Policy = () => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 overflow-hidden relative">
          <Image
            src={ReturnsImage}
            alt="returns"
            fill
            className="rounded w-full h-full"
          />
        </div>
        <p>30-Day Returns</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 overflow-hidden relative">
          <Image
            src={ShippingImage}
            alt="shipping"
            fill
            className="rounded w-full h-full"
          />
        </div>
        <p>Quick Shipping</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 overflow-hidden relative">
          <Image
            src={SupportImage}
            alt="support"
            fill
            className="rounded w-full h-full"
          />
        </div>
        <p>24-Hour support </p>
      </div>
    </div>
  );
};
