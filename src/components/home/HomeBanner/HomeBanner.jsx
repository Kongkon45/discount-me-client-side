import Image from "next/image";
import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { GoSearch } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px] relative">
      <div className="hidden md:block absolute top-0 right-0 left-0">
        <svg
          className="w-1/3 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="549"
          height="233"
          viewBox="0 0 549 233"
          fill="none"
        >
          <path
            d="M547.681 231.728C523.18 175.264 435.821 45.1472 385.485 117.353C341.05 181.094 502.144 270.659 503.28 116.792C504.415 -37.0754 183.917 -38.527 0.920978 119.184"
            stroke="#8ABA51"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeDasharray="8 8"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[19px]">
        <div className="order-2 md:order-1 md:col-span-1 flex flex-col justify-center">
          <h1 className="text-3xl md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] 3xl:text-[80px] 4xl:text-[90px] 5xl:text-[96px] font-bold text-black leading-none">
            Good <span className="text-primary">food</span>, great <br />{" "}
            memories
          </h1>
          <p className="text-lg font-normal text-black leading-normal mt-[25px]">
            Enable diners to customize their booking by <br /> requesting a
            specific table location or view.
          </p>
          <div className="flex justify-between items-center border border-black rounded-full mt-8">
          <button className="flex items-center gap-2 text-base font-normal text-gray-100 bg-secondary py-2 pl-[12px] pr-[6px] rounded-l-full m-1">
            <FaMapMarkerAlt className="mr-8" /> Location <TiArrowSortedDown />
          </button>
          <div className="p-3 rounded-full bg-secondary mr-2">
            <GoSearch className="text-white" />
          </div>
        </div>
        </div>
        <div className="order-1 md:order-2 md:col-span-1">
          <Image
            src="/assets/homePage/home_banner_bg.png"
            alt="home banner"
            width={699}
            height={699}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
