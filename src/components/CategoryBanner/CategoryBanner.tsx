// import React from 'react';

// const CategoryBanner = () => {
//     return (
//         <div>
//             <div
//                 style={{
//                     backgroundImage: `url('/assets/homePage/category_banner.png')`,
//                 }}
//                 className="h-[120px] w-auto bg-cover bg-no-repeat bg-center"
//             >
//             </div>
//         </div>
//     );
// };

// export default CategoryBanner;


import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

const CategoryBanner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/assets/homePage/banner.svg')`,
        }}
        className="h-[120px] flex items-center w-auto bg-cover bg-no-repeat bg-center"
      >
        <div className="flex items-center gap-2 px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px] ">
          <Link href="/">
            <GoHome className="w-[24px] h-[24px] text-white hover:text-primary-100" />
          </Link>

          <MdKeyboardArrowRight className="w-[20px] h-[20px] text-white" />
          <Link href="/dashboard">
            <span className="text-gray hover:text-primary text-base font-normal ">
            Categories
            </span>
          </Link>
          <MdKeyboardArrowRight className="w-[20px] h-[20px] text-white" />
          <Link href="/">
            <span className="text-primary hover:text-gray text-base font-normal ">
            Profile
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;


