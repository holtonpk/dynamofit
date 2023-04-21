import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { HiMapPin } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-[#1f2625] text-white">
      <div className="container px-4 py-6 mx-auto">
        <div className="flex md:grid md:grid-cols-2 flex-wrap  ">
          <div className="w-full  flex items-center justify-center flex-col   ">
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <p className="mb-2 text-white/70 md:w-[50%] text-center">
              We're a passionate team dedicated to providing high-quality,
              innovative fitness solutions. Our mission is to empower
              individuals to achieve their wellness goals and live healthier,
              happier lives. Join our community and experience the difference!
            </p>
          </div>

          <div className="grid grid-cols-1 w-full  ">
            <div className="w-full  flex flex-col items-center justify-center">
              <h2 className="text-lg font-bold mb-4">Contact</h2>
              <ul className="list-none  flex flex-col w-[50%] items-center  text-white/70">
                <li className="mb-2 whitespace-nowrap flex items-center">
                  <span className="mr-2">
                    <MdEmail />
                  </span>
                  info@example.com
                </li>
                <li className="mb-2 whitespace-nowrap flex items-center">
                  <span className="mr-2 ">
                    <AiFillPhone />
                  </span>
                  +1 (123) 456-7890
                </li>
                <li className="mb-2  whitespace-nowrap flex items-center">
                  <span className="mr-2">
                    <HiMapPin />
                  </span>
                  123 Main St, New York, NY 10001
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main-600 text-white text-sm py-2">
        <div className="container px-4 mx-auto">
          <p className="text-center">
            &copy; 2023 DynamoFit Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
