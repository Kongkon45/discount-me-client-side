import React from "react";
import restaurantData from "../../../topRestaurants.json";
import Image from "next/image";
import { PiMapPinLineDuotone } from "react-icons/pi";
import ItemCategory from "../ItemCategory/ItemCategory";
import ProductCategory from "../ProductCategory/ProductCategory";
import Link from "next/link";

interface ViewRestaurantProps {
  id: string | number;
}

const ViewRestaurant: React.FC<ViewRestaurantProps> = ({ id }) => {
  const singleRestaurantData = restaurantData?.filter(
    (data) => data?.id === Number(id)
  );

  return (
    <div className="px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px]">
      {singleRestaurantData?.map((data) => (
        <div key={data?.id}>
          <Image
            src={data?.thumbnail_image}
            alt={data?.name}
            width={1475}
            height={605}
          />
          <h5 className="text-3xl py-4 font-bold text-black border-b-2">
            {data?.name}
          </h5>
          <div className="flex items-center gap-5 md:gap-16 lg:gap-24 xl:gap-28 3xl:gap-32 5xl:gap-36">
            <p className="flex items-center gap-1 text-dark-100 text-base font-normal pt-[30px] pb-[20px]">
              <PiMapPinLineDuotone className="w-[27px] h-[27px] text-secondary" />{" "}
              {data?.location}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <path
                d="M5.50879 23.3014H25.3201M5.50879 15.7542H25.3201M5.50879 8.20703H25.3201"
                stroke="#00B047"
                strokeWidth="3.01887"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      ))}
      <div>
        <p className="flex items-center gap-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="244"
            height="40"
            viewBox="0 0 244 40"
            fill="none"
          >
            <path
              d="M22.7493 0.572266L27.7127 15.8483H43.7749L30.7803 25.2894L35.7438 40.5654L22.7493 31.1243L9.7547 40.5654L14.7182 25.2894L1.72363 15.8483H17.7858L22.7493 0.572266Z"
              fill="#FF7D29"
            />
            <path
              d="M122.234 0.572266L127.197 15.8483H143.259L130.265 25.2894L135.228 40.5654L122.234 31.1243L109.239 40.5654L114.203 25.2894L101.208 15.8483H117.27L122.234 0.572266Z"
              fill="#FF7D29"
            />
            <path
              d="M72.4914 0.572266L77.4549 15.8483H93.5171L80.5225 25.2894L85.486 40.5654L72.4914 31.1243L59.4969 40.5654L64.4604 25.2894L51.4658 15.8483H67.528L72.4914 0.572266Z"
              fill="#FF7D29"
            />
            <path
              d="M171.976 0.572266L176.939 15.8483H193.001L180.007 25.2894L184.97 40.5654L171.976 31.1243L158.981 40.5654L163.945 25.2894L150.95 15.8483H167.012L171.976 0.572266Z"
              fill="#FF7D29"
            />
            <path
              d="M221.718 0.572266L226.681 15.8483H242.744L229.749 25.2894L234.713 40.5654L221.718 31.1243L208.723 40.5654L213.687 25.2894L200.692 15.8483H216.755L221.718 0.572266Z"
              fill="#BEBEBE"
            />
          </svg>
          <span className="text-dark-300  text-4xl font-bold ">4.3</span>
        </p>
        <div className="flex items-center justify-between py-12">
            <h4 className="text-3xl font-bold text-dark-300">Items🔥</h4>
            <Link href="/explore-restaurants/view-items">
            <button className="text-2xl font-normal text-secondary pt-[6px] pb-[8px] px-[16px] seeAll_button">See all</button>
            </Link>
        </div>
        {/* items category  */}
        <ItemCategory/>
        {/* product category  */}
        <ProductCategory/>
      </div>
    </div>
  );
};

export default ViewRestaurant;
