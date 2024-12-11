"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const carts = useSelector((state: any) => state.carts.carts);
  console.log(carts);
  const [isOpen, setIsOpen] = useState(false);
  const [hoverCategory, setHoverCategory] = useState(true);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-white py-4">
        <nav className="px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px]">
          <div className=" flex items-center justify-between">
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
            {/* search input field button */}
            <div className="hidden md:block">
              <div className="flex items-center">
                <div className="relative w-full">
                  <span className="absolute inset-y-0 left-4 flex items-center text-gray-400">
                    <CiSearch size={20} />
                  </span>
                  <input
                    className="w-full text-gray-900 text-[15px] font-normal border py-2 pl-10 pr-4 rounded-l-full focus:outline-none"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                  />
                </div>
                <button className="text-base font-normal text-gray-100 bg-primary py-2 px-[24px] rounded-r-full hover:bg-primary-dark transition">
                  Search
                </button>
              </div>
            </div>

            <div className="hidden xl:flex space-x-8">
              <Link
                href="#"
                className="text-base 2xl:text-lg font-normal flex items-center text-dark-300 hover:text-primary"
                onMouseEnter={() => setHoverCategory(false)}
                onMouseLeave={() => setHoverCategory(true)}
              >
                All Category{" "}
                {hoverCategory ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </Link>
              <Link
                href="/coupon"
                className="text-base 2xl:text-lg font-normal text-dark-300 hover:text-primary"
              >
                Coupon
              </Link>
              <Link
                href="/support"
                className="text-base 2xl:text-lg font-normal text-dark-300 hover:text-primary"
              >
                Support
              </Link>
              <Link
                href="/dashboard"
                className="text-base 2xl:text-lg font-normal text-dark-300 hover:text-primary"
              >
                Dashboard
              </Link>
            </div>

            {/* Right side: Button */}
            <div className="hidden md:block">
              <div className="flex items-center gap-[20px]">
                <Link href="/cart" className="flex gap-1 ">
                  <LuShoppingCart className="w-[26px] h-[26px]" />{" "}
                  <sup className="text-md font-bold mt-2">{carts.length}</sup>
                </Link>

                <Link href="/signin">
                  <LuUser className="w-[30px] h-[30px]" />
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
                onMouseEnter={() => setHoverCategory(false)}
                onMouseLeave={() => setHoverCategory(true)}
              >
                All Category{" "}
                {hoverCategory ? <IoIosArrowDown /> : <IoIosArrowUp />}
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
              <Link
                href="#"
                className="block text-base 2xl:text-lg font-normal text-dark-300 hover:text-primary py-2"
              >
                Dashboard
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
