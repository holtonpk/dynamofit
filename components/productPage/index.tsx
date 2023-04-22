import React, { useEffect, useState } from "react";
import ProductImages from "./ProductImages";
import ProductPanel from "./productPanel/index";
import Questions from "./Questions";
import Review from "./Review";
import Image from "next/image";
import moreImage1 from "../../public/images/moreimage1.webp";
import moreImage2 from "../../public/images/moreImage2.webp";
import productGif from "../../public/images/gif.gif";
import { SiTiktok } from "react-icons/si";
import phone from "../../public/images/phone.png";
import { Disclosure } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa";
import faq from "../../public/data/faq.json";
const ProductPage = ({ product }: any) => {
  console.log("product ===>", product);
  const [selectedProduct, setSelectedProduct] = useState({
    title: product.title,
    price: product.price,
    variantId: product.variants.edges[0].node.id,
    quantity: 1,
    image: product.variants.edges[0].node.image.url,
    selectedVariant: product.variants.edges[0].node,
    quantityAvailable: product.quantityAvailable,
  });

  return (
    <div className="min-h-screen pb-6">
      <div className="flex product-grid w-full">
        <ProductImages product={product} selectedProduct={selectedProduct} />

        <ProductPanel
          product={product}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      </div>
      <MoreInfo />
      <div className="flex flex-col md:flex-row mt-6 md:w-screen">
        <Review product={product} />
      </div>
      <FAQ />
    </div>
  );
};

export default ProductPage;

const productHard = {
  title: "Test Product",
  price: 100.0,
  discountedPrice: 60.0,
  totalReviews: 10,
  productImages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  quantity: 1,
  reviews: [
    {
      name: "Emily",
      rating: 5,
      title: "Best pillow ever!",
      description:
        "I'm absolutely in love with this Luxury Memory Foam Pillow! It's incredibly comfortable and has helped me get a better night's sleep. I love how it conforms to my head and neck, and the adjustable loft is a game-changer. The bamboo cover is also a great touch - it's soft, hypoallergenic, and keeps me cool all night long. I highly recommend this pillow to anyone looking for a better sleep experience.",
    },
  ],
};

const MoreInfo = () => {
  return (
    <div className="flex flex-col gap-3 lg:w-[80%] mx-auto  items-center">
      <div className="slide-in-bottom lg:my-20  w-[80%] md:w-[60%] lg:w-[60%] mt-20 lg:flex relative   ">
        <div className=" absolute h-[400px] aspect-[1/1.8] -translate-y-1/4 -translate-x-1/2 left-1/2 lg:translate-x-[70%] lg:-translate-y-1/2 lg:top-1/2  lg:right-0 main">
          <Image
            src={phone}
            alt="image"
            fill
            className="rounded w-full h-full z-20"
          />
          <div className="absolute top-1/2 left-1/2  z-10 -translate-x-1/2 -translate-y-1/2 h-[375px] w-[185px] rounded-[20px] overflow-hidden">
            <Image
              src={productGif}
              alt="image"
              fill
              className="rounded   absolute"
            />

            <span className="absolute whitespace-nowrap text-sm gap-2 items-center text-white bottom-4 flex  right-4 ">
              As seen on TikTok
              <SiTiktok className="text-white h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="bg-main-500   lg:order-1 w-full p-8 h-fit flex gap-4 justify-end flex-col rounded-lg">
          <span className="h-[270px]  aspect-[1/1.5] lg:hidden " />
          {/* <span className="h-[270px]  aspect-[1/1.5] lg:block hidden " /> */}
          <h1 className="relative w-full lg:max-w-[70%] text-white h-fit text-4xl  font-bold rounded-md bottom-0 ">
            Made by atheletes for athletes
          </h1>
          <h1 className="relative w-full lg:max-w-[70%]  text-white h-fit text-2xl rounded-md bottom-0  ">
            Compact, collapsible, and perfect for targeting muscle tension
            anytime, anywhere!
          </h1>
          {/* <button className="bg-black text-white w-fit p-2 px-10 rounded-md text-2xl">
            Order Now
          </button> */}
        </div>
      </div>
      <div className="slide-in-bottom  flex flex-col md:flex-row md:gap-20 items-center justify-between p-4 md:p-10">
        <div className="w-[100%] md:w-[40%] aspect-square overflow-hidden relative shadow-lg">
          <Image
            src={moreImage2}
            alt="image"
            fill
            className="rounded w-full h-full"
          />
        </div>
        <div className="flex flex-col p-4 max-w-full  md:w-[60%] items-center">
          <span className="relative  gap-2 w-fit whitespace-  text- h-fit text-lg md:text-5xl flex flex font-bold rounded-md bottom-0 ">
            Made by
            <h1 className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-main-800 via-main-400  to-main-800">
              Athletes
            </h1>
            for
            <h1 className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-main-800 via-main-400  to-main-800">
              Athletes
            </h1>
          </span>
          <p className="text-sm  flex-shrink w-[100%] md:text-3xl text-center  ">
            Made with top-notch, high-density foam and a sturdy inner core, the
            PocketRoller is all about giving you the perfect balance between
            firmness and comfort. 😉 Target those pemain muscles, ease tension,
            and speed up your recovery like a pro! 💪
          </p>
        </div>
      </div>
      {/* <div className="flex items-center justify-between p-4 md:p-10 ">
        <p className="text-lg flex-shrink w-[50%] md:text-2xl text-black  p-4 md:p-10">
          And did we mention how incredibly easy it is to use? Just{" "}
          <span className="font-bold">snap, roll, and relax</span>! 😌 The
          PocketRoller's unique design lets you extend and retract in a snap,
          making it the ultimate no-fuss solution for maintaining happy, healthy
          muscles! 🎯
        </p>
        <div className="w-[50%] md:w-[40%] aspect-square overflow-hidden relative shadow-lg">
          <Image
            src={moreImage1}
            alt="image"
            fill
            className="rounded w-full h-full"
          />
        </div>
      </div> */}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="w-full px-4 ">
      <div className="mx-auto w-full  rounded-2xl bg-neutral-100  p-2 shadow-lg">
        <h1 className="font-bold text-3xl p-2 text-main-500">FAQ</h1>
        {faq.map((question, indx) => (
          <Disclosure key={indx}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex mt-2 w-full justify-between rounded-lg bg-main-100 px-4 py-2 text-left text-sm font-medium text-main-900 hover:bg-main-200 focus:outline-none focus-visible:ring focus-visible:ring-main-500 focus-visible:ring-opacity-75">
                  <span>{question.question}</span>
                  <FaChevronUp
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-main-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  {question.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
