"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const carts = useSelector((state:any)=> state.carts.carts)
  console.log(carts)
  const [isOpen, setIsOpen] = useState(false);
  const [hoverCategory, setHoverCategory] = useState(true);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-white py-4">
        <nav className="container">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left side: Logo */}
            <div className="text-white text-2xl font-bold">
              <Link href="/">
                <Image
                  src="/assets/homePage/navbar_logo.png"
                  alt="nav logo"
                  width={143}
                  height={41}
                />
              </Link>
            </div>
            {/* search button input  */}
            <div className="flex items-center">
                <input className="w-full text-gray-50 text-[15px] font-normal border py-2 px-4 rounded-l-full" type="text" name="" id="" placeholder="Search"/>
                <button className="text-base font-normal text-gray-100 bg-primary py-2 px-[24px] rounded-r-full">Search</button>
            </div>

            {/* Center: Menu Items (hidden on small screens) */}
            <div className="hidden xl:flex space-x-8">
              <Link
                href="#"
                className="text-base 2xl:text-lg font-normal flex items-center text-dark-300 hover:text-primary"
                onMouseEnter={()=>setHoverCategory(false)}
                onMouseLeave={()=>setHoverCategory(true)}
              >
                All Category { hoverCategory ? <IoIosArrowDown /> : <IoIosArrowUp /> } 
              </Link>
              <Link
                href="#"
                className="text-base 2xl:text-lg font-normal text-dark-300 hover:text-primary"
              >
                Coupon
              </Link>
              <Link
                href="#"
                className="text-base 2xl:text-lg font-normal text-dark-300 hover:text-primary"
              >
                Support
              </Link>
            </div>

            {/* Right side: Button */}
            <div className="hidden md:block">
              <div className="flex items-center gap-[20px]">
                <Link href="/cart" className="flex gap-1 ">
                <LuShoppingCart className="w-[26px] h-[26px]"/> <sup className="text-md font-bold mt-2">{ carts.length}</sup>
                </Link>
                
                <Link href="/signin">
                <LuUser className="w-[30px] h-[30px]"/>
                </Link>
                
              </div>
            </div>

            {/* Small Device Menu Icon */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <FiX className="w-6 h-6 text-primary" />
                ) : (
                  <FiMenu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="xl:hidden mt-4 space-y-6">
              <Link
                href="#"
                className="block text-base 2xl:text-lg font-normal flex items-center text-dark-300 hover:text-primary py-2"
                onMouseEnter={()=> setHoverCategory(false)}
                onMouseLeave={()=> setHoverCategory(true)}
              >
                All Category {hoverCategory ? <IoIosArrowDown/> : <IoIosArrowUp/>}
                
              </Link>
              <Link
                href="#"
                className="block text-base 2xl:text-lg font-normal text-dark-300 hover:text-primary py-2"
              >
                Coupon
              </Link>
              <Link
                href="#"
                className="block text-base 2xl:text-lg font-normal text-dark-300 hover:text-primary py-2"
              >
                Support
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
