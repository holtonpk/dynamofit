import React, { useEffect, useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Image from "next/image";
const ProductImages = ({ product, selectedProduct }: any) => {
  const [mobile, setMobile] = useState<any>(undefined);
  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 1000 ? true : false);
    };
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return (
    <>
      {mobile ? (
        <MobileProductImage
          product={product}
          selectedProduct={selectedProduct}
        />
      ) : (
        <DesktopProductImages
          product={product}
          selectedProduct={selectedProduct}
        />
      )}
    </>
  );
};

export default ProductImages;

// Desktop ---------------------------------

const DesktopProductImages = ({ product, selectedProduct }: any) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const productImages = [
    { src: selectedProduct.image, altText: product.title },
    ...product.images.slice(0, 4).map((image: any) => {
      return { src: image.node.src, altText: image.node.altText };
    }),
  ];

  return (
    <div className="flex flex-col items-center pt-4">
      <div className="w-[30vw]  aspect-square flex justify-center items-center  ">
        <div className="w-full aspect-square  rounded-md overflow-hidden relative shadow-lg">
          <Image
            src={productImages[0].src}
            alt={productImages[0].altText}
            layout="fill"
            className="rounded w-full h-full"
          />
        </div>
      </div>
      <div className="  w-full grid grid-cols-2 gap-8 h-fit p-8">
        {productImages.slice(1, 5).map((image: any, index: any) => (
          <div
            key={index}
            className="w-full aspect-square  rounded-md overflow-hidden relative  shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.altText}
              layout="fill"
              className="rounded w-full h-full"
            />
          </div>
        ))}
        {/* <ProductImageCarouselDesktop
        productImages={productImages}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
      />
      <div className=" mx-auto h-full bg-black/30 rounded-md snap-center aspect-square relative ">
        <Image
          src={productImages[selectedImageIndex].src}
          alt={productImages[selectedImageIndex].altText}
          layout="fill"
          className="rounded w-full h-full"
        />
      </div> */}
      </div>
    </div>
  );
};

const ProductImageCarouselDesktop = ({
  productImages,
  selectedImageIndex,
  setSelectedImageIndex,
}: any) => {
  const handleClickImage = (imageIndex: any) => {
    setSelectedImageIndex(imageIndex);
  };

  // const [showingProducts, setShowingProducts] = useState(

  // );
  const [firstImage, setFirstImage] = useState(0);

  const scrollDecrease = () => {
    setFirstImage(firstImage - 5);
    // setShowingProducts(productImages.slice(firstImage - 5, firstImage));
  };
  const scrollIncrease = () => {
    setFirstImage(firstImage + 5);
    // setShowingProducts(productImages.slice(firstImage + 5, firstImage + 10));
  };

  return (
    <div className=" px-3 w-[15%] h-full overflow-hidden no-scrollbar relative">
      {firstImage > 0 && (
        <button
          onClick={scrollDecrease}
          className="z-10 absolute left-1/2 hover:opacity-95 -translate-x-1/2 top-0 w-[60%] h-10 p-2 bg-black text-white opacity-80 rounded-md flex items-center justify-center"
        >
          <TiArrowSortedUp className="h-5 w-5" />
        </button>
      )}
      {firstImage < productImages.length - 5 && (
        <button
          onClick={scrollIncrease}
          className="z-10 absolute left-1/2 hover:opacity-95 -translate-x-1/2 bottom-0 w-[60%] h-10 p-2 bg-black text-white opacity-80 rounded-md flex items-center justify-center"
        >
          <TiArrowSortedDown className="h-5 w-5" />
        </button>
      )}

      <div className="min-w-full p-0 relative w-full h-fit flex flex-col    gap-6 py-4">
        {productImages.slice(0, 5).map((image: any, i: number) => (
          <div
            key={i}
            onClick={() => handleClickImage(i)}
            className={`
        ${
          productImages[selectedImageIndex] === image
            ? "border-black"
            : "border-transparent"
        }
         w-full  bg-black/30 border-2 relative aspect-square rounded-md cursor-pointer hover:border-black`}
          >
            <Image
              src={image.src}
              alt={image.altText}
              layout="fill"
              className="rounded w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Mobile ---------------------------------

const MobileProductImage = ({ product, selectedProduct }: any) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const productImages = [
    { src: selectedProduct.image, altText: product.title },
    ...product.images.slice(0, 4).map((image: any) => {
      return { src: image.node.src, altText: image.node.altText };
    }),
  ];
  return (
    <div className="flex  flex-col w-full   overflow-show h-fit ">
      <MainProductImageMobile
        selectedImageIndex={selectedImageIndex}
        productImages={productImages}
        setSelectedImageIndex={setSelectedImageIndex}
      />
      <ProductImageCarouselMobile
        selectedImage={selectedImageIndex}
        setSelectedImage={setSelectedImageIndex}
        productImages={productImages}
      />
    </div>
  );
};

const MainProductImageMobile = ({ productImages, selectedImageIndex }: any) => {
  useEffect(() => {
    const imageBox = document.getElementById("imageBox");
    imageBox?.scrollTo(window.innerWidth * selectedImageIndex, 0);
  }, [selectedImageIndex]);

  return (
    <div
      id="imageBox"
      className="gap-4    pt-3  pb-5 items-center no-scrollbar px-4   snap-x snap-mandatory  scroll-smooth grid grid-flow-col overflow-scroll w-full  relative"
    >
      {productImages.map((image: any, i: number) => (
        <div
          key={i}
          className=" bg-black/30  w-[85vw] shadow-lg rounded-md overflow-hidden  snap-center aspect-square relative "
        >
          <Image
            src={image.src}
            alt={image.altText}
            layout="fill"
            className=" w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

const ProductImageCarouselMobile = ({
  selectedImage,
  setSelectedImage,
  productImages,
}: any) => {
  const handleClickImage = (imageIndex: any) => {
    setSelectedImage(imageIndex);
  };
  return (
    <div className=" w-full h-20  overflow-scroll no-scrollbar">
      <div className="px-4 w-fit relative   flex   h-full gap-4">
        {productImages.map((image: any, i: number) => (
          <div
            key={i}
            onClick={() => handleClickImage(i)}
            className={`
            ${
              selectedImage === image ? "border-main-600" : "border-transparent"
            }
               shadow-lg relative aspect-square rounded-md cursor-pointer hover:border-main-600 hover:border-2`}
          >
            <Image
              src={image.src}
              alt={image.altText}
              layout="fill"
              className="rounded w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
