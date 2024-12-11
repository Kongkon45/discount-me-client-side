import React from "react";
import productsData from "../../../products.json";
import Image from "next/image";
const Products = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px] mt-[30px] md:mt-[40px] lg:mt-[50px] xl:mt-[60px] 2xl:mt-[70px] 3xl:mt-[80px] 4xl:mt-[88px] 5xl:mt-[98px] padding__bottom">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[9px]">
        {productsData?.map((data) => {
          return (
            <div key={data?.id} className="mt-[10px]">
              <Image
                src={data?.image}
                alt={data?.name}
                width={500}
                height={286}
                className="rounded-3xl"
              />
              <h6 className="text-lg xl:text-[21px] font-medium text-dark-100 pt-1">
                {data?.name}
              </h6>
              <p className="text-[15px] font-normal text-dark-100 pt-1">
                {data?.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
