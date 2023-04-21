import { Disclosure } from "@headlessui/react";
import { HiOutlineTruck } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { RiArrowUpSLine } from "react-icons/ri";
import { FaSearch, FaLayerGroup } from "react-icons/fa";

export default function Questions() {
  return (
    <div className="w-full  ">
      <div className="mx-auto w-full  rounded-2xl bg-gradient-to-r from-main-500 to-main-200    p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-white/80 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="flex flex-row items-center gap-2">
                  <HiOutlineTruck className="h-5 w-5 text-black" />
                  Fast & free shipping
                </span>
                <RiArrowUpSLine
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-bold">
                Free Shipping 7-14 Days 1-3 Day Processing Time
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-white/80 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="flex flex-row items-center gap-2">
                  <FaSearch className="h-5 w-5 text-black " />
                  Details
                </span>
                <RiArrowUpSLine
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-bold">
                Expanded Length: 2 Feet <br /> Compact Length: 5.2 Inches
                <br /> Width: 5.4 Inches Bearing
                <br /> Weight: 350lbs+
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-white/80 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="flex flex-row items-center gap-2">
                  <AiOutlineHeart className="h-5 w-5 text-black" />
                  100% Money Back Guarantee
                </span>
                <RiArrowUpSLine
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-bold">
                We are sure you are going to love your PocketRoller. But in case
                you are not satisfied, we are offering you a 30-day money-back
                guarantee. Return your package for a 100% refund.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-white/80 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="flex flex-row items-center gap-2">
                  <FaLayerGroup className="h-5 w-5 text-black" />
                  Materials
                </span>
                <RiArrowUpSLine
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-boldk">
                We are sure you are going to love your PocketRoller. But in case
                you are not satisfied, we are offering you a 30-day money-back
                guarantee. Return your package for a 100% refund.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
