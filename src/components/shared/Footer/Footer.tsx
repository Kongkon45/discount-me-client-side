import Image from "next/image";
import React from "react";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className="footer__bg_color px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px] footer__all">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[20px] md:gap-[50px]">
          <div className="md:col-span-4">
            <Link href="/">
              <Image
                src="/assets/homePage/footer_logo.png"
                alt="footer logo"
                width={207}
                height={59}
                className="w-[207px] h-[59px] mx-auto md:mx-0"
              />
            </Link>
            <p className="text-sm text-gray-100 font-normal pt-[20px] lg:pt-[30px] text-center md:text-left">
              Ecommerce is a free UI Kit from Paperpillar <br/> that you can use for
              your personal or <br/> commercial project.
            </p>
            {/* search button input  */}
            <div className="flex justify-center md:justify-start items-center gap-[10px] mt-[26px]">
                <input className="w-1/2 md:w-2/3 bg-transparent text-gray-50 text-[15px] font-normal border-[1px] py-2 px-4 rounded-full placeholder:text-xs" type="text" name="" id="" placeholder="Type your email address"/>
                <button className="text-base font-semibold text-dark-100 bg-gray py-2 px-[24px] rounded-full">Submit</button>
            </div>
          </div>
          <div className="md:col-span-2">
            <h6 className="text-lg font-bold text-gray text-center md:text-left">
              Account
            </h6>
            <ul className="pt-[20px]  lg:pt-[30px] text-gray-100 text-center md:text-left">
              <li className="text-sm md:text-base font-normal hover:text-primary cursor-pointer">Immigration</li>
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px] hover:text-primary cursor-pointer">
                My Account
              </li>
              <Link href="/signin">
              <li className="text-sm md:text-base font-normal hover:text-primary cursor-pointer">
                Login / Register
              </li>
              </Link>
              
              <Link href="/cart">
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px] hover:text-primary cursor-pointer">
                Cart
              </li>
              </Link>
              
              <li className="text-sm md:text-base font-normal hover:text-primary cursor-pointer">Wishlist</li>
              <li className="text-sm md:text-base font-normal pt-[12px] md:pt-[15px] hover:text-primary cursor-pointer">Shop</li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-2">
            <h6 className="text-lg font-bold text-gray text-center md:text-left">
              Quick Link
            </h6>
            <ul className="pt-[20px]  lg:pt-[30px] text-gray-100 text-center md:text-left">
              

              <Link href="/privacy-policy">
              <li className="text-sm md:text-base font-normal hover:text-primary cursor-pointer">
                Privacy Policy
              </li>
              </Link>

              <Link href="/terms-of-use">
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px] hover:text-primary cursor-pointer">
                Terms Of Use
              </li>
              </Link>
              
              <li className="text-sm md:text-base font-normal hover:text-primary cursor-pointer">FAQ</li>
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px] hover:text-primary cursor-pointer">Contact</li>
              <Link href="/about"><li className="text-sm md:text-base font-normal hover:text-primary cursor-pointer">About</li></Link>
              
            </ul>
          </div>
          <div className="md:col-span-2">
            <h6 className="text-lg font-bold text-gray text-center md:text-left">
              Support
            </h6>
            <ul className="pt-[20px]  lg:pt-[30px] text-gray-100 text-center md:text-left">
              <li className="text-sm md:text-base font-normal hover:text-primary cursor-pointer">
                exclusive@gmail.com
              </li>
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px] hover:text-primary cursor-pointer">
                +88015-88888-9999
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h6 className="text-lg font-bold text-gray text-center md:text-left">
              Download App
            </h6>
            <div className="hidden md:block">
            <div className="w-full flex justify-center md:justify-start items-center gap-2 pt-[20px]  lg:pt-[30px]">
              <div className="w-full md:w-2/5 ">
                <Image
                  src="/assets/homePage/qr_codd.png"
                  alt="qr code"
                  width={76}
                  height={76}
                />
              </div>
              <div className="w-full md:w-3/5">
                <Image
                  src="/assets/homePage/google_play.png"
                  alt="google play"
                  width={104}
                  height={30}
                />
                <Image
                  src="/assets/homePage/app_store.png"
                  alt="app store"
                  width={104}
                  height={34}
                />
              </div>
            </div>
            </div>
            <div className="block md:hidden">
            <div className="w-full flex justify-center items-center gap-2 pt-[20px]  lg:pt-[30px]">
              <div className="w-1/2">
                <Image
                  src="/assets/homePage/qr_codd.png"
                  alt="qr code"
                  width={76}
                  height={76}
                  className="w-[76px] h-[76px] mx-auto"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/assets/homePage/google_play.png"
                  alt="google play"
                  width={104}
                  height={30}
                  className="w-[104px] h-[30px] mx-auto"
                />
                <Image
                  src="/assets/homePage/app_store.png"
                  alt="app store"
                  width={104}
                  height={34}
                  className="w-[104px] h-[30px] mx-auto"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
