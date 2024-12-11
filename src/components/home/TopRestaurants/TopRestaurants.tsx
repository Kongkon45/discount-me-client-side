import React from "react";
import topRestaurantsData from "../../../topRestaurants.json";
import Image from "next/image";
import "./TopRestaurants.css";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const TopRestaurants = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px]">
      <div className="flex items-center justify-between pb-[35px]">
        <div>
          <h5 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-dark-50">
            Explore <span className="text-primary">Top Restaurants</span>
          </h5>
          <p className="text-sm font-normal text-dark-200 pt-[4px]">
            Check your city{" "}
            <span className="font-medium">
              {" "}
              Near by <br /> Restaurant
            </span>
          </p>
        </div>
        <div>
          <Link href={`/explore-restaurants`}>
            <button className="flex items-center gap-1 text-base font-normal text-dark-100">
              See All{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M7.875 4.375L14 10.5L7.875 16.625"
                  stroke="#232323"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] lg:gap-[24px] xl:gap-[30px] 3xl:gap-[40px] 5xl:gap-[50px]">
        {topRestaurantsData?.slice(0,3)?.map((data) => {
          return (
            <div key={data?.id} className="restaurants_cart_bg p-[16px]">
              <Image
                src={data?.image}
                alt={data?.name}
                width={433}
                height={308}
              />
              <div className="flex justify-between items-center pt-1">
                <h5 className="text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] 3xl:text-[28px] 4xl:text-[30px] 5xl:text-[32px] text-dark-50 font-medium">
                  {data?.name}
                </h5>
                <p className="flex items-center gap-1 text-dark-50 text-[20px] md:text-[22px] xl:text-[24px] font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                  >
                    <path
                      d="M3.20984 15.1994C2.77912 14.8011 3.01309 14.0811 3.59567 14.012L11.8506 13.0329C12.088 13.0047 12.2943 12.8556 12.3944 12.6385L15.8762 5.09002C16.1219 4.5573 16.8793 4.5572 17.125 5.08992L20.6068 12.6383C20.707 12.8554 20.9119 13.0049 21.1493 13.0331L29.4047 14.012C29.9872 14.0811 30.2206 14.8013 29.7898 15.1997L23.6874 20.844C23.5119 21.0063 23.4337 21.248 23.4803 21.4825L25.0999 29.6358C25.2142 30.2112 24.6018 30.6571 24.0899 30.3705L16.8363 26.3092C16.6277 26.1924 16.3742 26.193 16.1656 26.3098L8.91124 30.3695C8.39932 30.656 7.78581 30.2112 7.90015 29.6358L9.51996 21.483C9.56656 21.2485 9.4886 21.0063 9.31306 20.844L3.20984 15.1994Z"
                      fill="#FFC60B"
                    />
                  </svg>{" "}
                  (4.5)
                </p>
              </div>
              <p className="flex items-center gap-1 text-dark-100 text-base font-normal py-1">
                <CiLocationOn className="w-[27px] h-[27px]" /> {data?.location}
              </p>
              <p className="text-dark-200 text-xs font-normal pb-[12px]">
                {data?.desc}{" "}
                <strong className="text-dark-100">Read More...</strong>
              </p>
              <button className="w-full text-base font-bold bg-secondary text-gray-100 py-[10px] rounded-[8px] ">
                Visit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRestaurants;
