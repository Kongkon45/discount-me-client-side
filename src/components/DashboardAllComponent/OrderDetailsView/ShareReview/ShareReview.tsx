import React from "react";
import SideBar from "../../SideBar/SideBar";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

const ShareReview = () => {
  return (
    <div>
      <div className="px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px] grid grid-col-1 md:grid-cols-4 gap-5 my-10">
        <div className="md:col-span-1 navigation_cart_bg py-5">
          <SideBar />
        </div>
        <div className="md:col-span-3">
          <div>
            {/* rating  */}
            <div className="grid grid-cols-1 md:grid-cols-7 gap-5">
              <div className="md:col-span-2">
                <p className="text-dark-100 text-4xl font-medium flex justify-center items-center gap-2">
                  4.8 <FaStar className="text-black w-[30px] h-[30px]" />
                </p>
                <p className="text-lg font-normal text-dark-100 text-center">
                  1,64,002 Ratings <br />
                  & <br />
                  5,922 Reviews
                </p>
              </div>
              <div className="md:col-span-5">

                <div className="w-full flex items-center gap-6">
                <p className="w-1/4 text-[#F8B84E] text-3xl font-medium flex justify-center items-center gap-2">
                  5 <FaStar className="text-[#F8B84E] w-[24px] h-[24px]" />
                </p>
                <div className="w-3/4 flex items-center bg-gray-50 rounded-full my-4">
                  <div className="w-10/12 h-3 bg-black rounded-full" />
                  <div className="w-2/12 h-3 rounded-full" />
                </div>
                </div>
                <div className="w-full flex items-center gap-6">
                <p className="w-1/4 text-[#F8B84E] text-3xl font-medium flex justify-center items-center gap-2">
                  4 <FaStar className="text-[#F8B84E] w-[24px] h-[24px]" />
                </p>
                <div className="w-3/4 flex items-center bg-gray-50 rounded-full my-4">
                  <div className="w-6/12 h-3 bg-black rounded-full" />
                  <div className="w-6/12 h-3 rounded-full" />
                </div>
                </div>
                <div className="w-full flex items-center gap-6">
                <p className="w-1/4 text-[#F8B84E] text-3xl font-medium flex justify-center items-center gap-2">
                  3 <FaStar className="text-[#F8B84E] w-[24px] h-[24px]" />
                </p>
                <div className="w-3/4 flex items-center bg-gray-50 rounded-full my-4">
                  <div className="w-7/12 h-3 bg-black rounded-full" />
                  <div className="w-5/12 h-3 rounded-full" />
                </div>
                </div>
                <div className="w-full flex items-center gap-6">
                <p className="w-1/4 text-[#F8B84E] text-3xl font-medium flex justify-center items-center gap-2">
                  2 <FaStar className="text-[#F8B84E] w-[24px] h-[24px]" />
                </p>
                <div className="w-3/4 flex items-center bg-gray-50 rounded-full my-4">
                  <div className="w-1/12 h-3 bg-black rounded-full" />
                  <div className="w-11/12 h-3 rounded-full" />
                </div>
                </div>
                <div className="w-full flex items-center gap-6">
                <p className="w-1/4 text-[#F8B84E] text-3xl font-medium flex justify-center items-center gap-2">
                  1 <FaStar className="text-[#F8B84E] w-[24px] h-[24px]" />
                </p>
                <div className="w-3/4 flex items-center bg-gray-50 rounded-full my-4">
                  <div className="w-2/12 h-3 bg-black rounded-full" />
                  <div className="w-10/12 h-3 rounded-full" />
                </div>
                </div>


              </div>
            </div>
            <div className="flex items-center gap-2 my-6">
              <FaStar className="text-[#F8B84E] w-[28px] h-[28px]" />
              <FaStar className="text-[#F8B84E] w-[28px] h-[28px]" />
              <FaRegStar className="w-[28px] h-[28px]" />
              <FaRegStar className="w-[28px] h-[28px]" />
              <FaRegStar className="w-[28px] h-[28px]" />
            </div>
            <form>
              <label
                htmlFor="review"
                className="block text-lg mb-2 text-dark-100 font-normal text-xl"
              >
                Please share your opinion about the product
              </label>
              <textarea
                id="review"
                name="review"
                className="w-full pb-10 pt-1 px-2 bg-gray-400 text-white placeholder:text-secondary-100 placeholder:text-[20px] placeholder:font-normal rounded"
                placeholder="Your review"
              ></textarea>
              <br />
              <button
                type="submit"
                className="w-full mt-4 px-4 py-2 text-secondary-200 text-xl font-normal bg-dark-100 rounded hover:bg-primary"
              >
                SEND REVIEW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareReview;
