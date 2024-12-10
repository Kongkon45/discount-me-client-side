import Image from "next/image";
import React from "react";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className="footer__bg_color container footer__all">
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
            <p className="text-sm md:text-base category__color font-normal pt-[20px] md:pt-[25px] lg:pt-[30px] text-center md:text-left">
              Ecommerce is a free UI Kit from Paperpillar that you can use for
              your personal or commercial project.
            </p>
            {/* search button input  */}
            <div className="flex items-center gap-[10px] mt-[26px]">
                <input className="w-full bg-transparent text-gray-50 text-[15px] font-normal border-[1px] py-2 px-4 rounded-full" type="text" name="" id="" placeholder="Type your email address"/>
                <button className="text-base font-semibold text-dark-100 bg-gray py-2 px-[24px] rounded-full">Submit</button>
            </div>
          </div>
          <div className="md:col-span-2">
            <h6 className="text-lg font-bold text-white text-center md:text-left">
              Account
            </h6>
            <ul className="pt-[20px] md:pt-[25px] lg:pt-[30px] category__color text-center md:text-left">
              <li className="text-sm md:text-base font-normal">Immigration</li>
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px]">
                My Account
              </li>
              <li className="text-sm md:text-base font-normal">
                Login / Register
              </li>
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px]">
                Cart
              </li>
              <li className="text-sm md:text-base font-normal">Wishlist</li>
              <li className="text-sm md:text-base font-normal">Shop</li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-2">
            <h6 className="text-lg font-bold text-white text-center md:text-left">
              Quick Link
            </h6>
            <ul className="pt-[20px] md:pt-[25px] lg:pt-[30px] category__color text-center md:text-left">
              

              <Link href="/privacy-policy">
              <li className="text-sm md:text-base font-normal">
                Privacy Policy
              </li>
              </Link>

              <Link href="/terms-of-use">
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px]">
                Terms Of Use
              </li>
              </Link>
              
              <li className="text-sm md:text-base font-normal">FAQ</li>
              <li className="text-sm md:text-base font-normal">Contact</li>
              <Link href="/about"><li className="text-sm md:text-base font-normal">About</li></Link>
              
            </ul>
          </div>
          <div className="md:col-span-2">
            <h6 className="text-lg font-bold text-white text-center md:text-left">
              Support
            </h6>
            <ul className="pt-[20px] md:pt-[25px] lg:pt-[30px] category__color text-center md:text-left">
              <li className="text-sm md:text-base font-normal">
                exclusive@gmail.com
              </li>
              <li className="text-sm md:text-base font-normal py-[12px] md:py-[15px]">
                +88015-88888-9999
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h6 className="text-lg font-bold text-white text-center md:text-left">
              Download App
            </h6>
            <div className="flex items-center gap-2 pt-[20px] md:pt-[25px] lg:pt-[30px]">
              <div className="w-2/5">
                <Image
                  src="/assets/homePage/qr_codd.png"
                  alt="qr code"
                  width={76}
                  height={76}
                />
              </div>
              <div className="w-3/5">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
