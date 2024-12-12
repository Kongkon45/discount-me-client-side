import React from "react";

const CouponPage = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px] py-10">
      <div className="flex items-center justify-between gap-2 md:gap-10 lg:gap-20 py-4 px-3 md:px-20 rounded-lg border shadow-xl bg-white">
        <div className="w-2/5">
          <p className="text-secondary text-xl md:text-2xl lg:text-3xl font-medium">Price</p>
          <p className="text-primary text-xl md:text-2xl lg:text-3xl font-medium pt-2">$ 10.99</p>
        </div>
        <div className="w-3/5">
          <p className="text-dark-300 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">Single Discount</p>
          <p className="text-dark-700 text-xl md:text-2xl lg:text-3xl font-normal pt-2">Customer takes 6 discount</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 md:gap-10 lg:gap-20 py-4 px-3 md:px-20 rounded-lg border shadow-xl bg-white mt-10">
        <div className="w-2/5">
          <p className="text-secondary text-xl md:text-2xl lg:text-3xl font-medium">Price</p>
          <p className="text-primary text-xl md:text-2xl lg:text-3xl font-medium pt-2">$ 34.99</p>
        </div>
        <div className="w-3/5">
          <p className="text-dark-300 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">Unlimited Discount</p>
          <p className="text-dark-700 text-xl md:text-2xl lg:text-3xl font-normal pt-2">Customer get unlimited discount <br className="hidden md:block"/> in one month</p>
        </div>
      </div>
    </div>
  );
};

export default CouponPage;
