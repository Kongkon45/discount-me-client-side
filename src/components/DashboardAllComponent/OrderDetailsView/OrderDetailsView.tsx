import React from "react";
import Link from "next/link";
import SideBar from "../SideBar/SideBar";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const productCartData = [
  {
    id: 1,
    title: "Red Capsicum",
    image: "/assets/homePage/red_capsicum.png",
    price: "$14.00",
    quantity: "x5",
    subTotal: "$70.00",
  },
  {
    id: 2,
    title: "Green Capsicum",
    image: "/assets/homePage/red_capsicum.png",
    price: "$14.00",
    quantity: "x2",
    subTotal: "$28.00",
  },
  {
    id: 3,
    title: "Green Chili",
    image: "/assets/homePage/red_capsicum.png",
    price: "$26.00",
    quantity: "x10",
    subTotal: "$267.00",
  },
];

const OrderDetailsView = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px] grid grid-col-1 md:grid-cols-4 gap-5 my-14">
      <div className="md:col-span-1 navigation_cart_bg py-5">
        <SideBar />
      </div>
      <div className="md:col-span-3">
        <h5 className="block md:hidden text-center text-lg md:text-xl lg:text-2xl font-medium text-dark-400 pr-1 md:pr-3 pb-2">
          Order Details
        </h5>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-5">
            <h5 className="hidden md:block text-lg md:text-xl lg:text-2xl font-medium text-dark-400 pr-1 md:pr-3">
              Order Details
            </h5>
            <ul className="list-disc pl-5 flex items-center gap-8">
              <li className="text-base font-normal text-dark-900">
                April 24, 2021
              </li>
              <li className="text-base font-normal text-dark-900">
                3 Products
              </li>
            </ul>
          </div>
          <button className="text-base md:text-lg font-medium text-primary cursor-pointer underline">
            <Link href="/dashboard/order-history">Share Review</Link>
          </button>
        </div>
        {/* second part  */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-6">
            <div className="md:col-span-3 w-full flex items-center border border-[#E6E6E6] bg-white rounded-lg px-3 pb-3 pt-1">
              <div className="w-full md:w-1/2 border-r border-[#E6E6E6] ">
                <h5 className="text-base font-medium text-gray-600 border-b border-[#E6E6E6] py-2">
                  Billing Address
                </h5>
                <h6 className="text-dark-400 text-lg font-normal pt-2">
                  Dainne Russell
                </h6>
                <p className="text-dark-500 text-base font-normal">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
                <p className="text-gray-600 text-sm font-medium pt-4">Email</p>
                <p className="text-base font-normal text-dark-400">
                  dainne.ressell@gmail.com
                </p>
                <p className="text-gray-600 text-sm font-medium pt-2">Phone</p>
                <p className="text-base font-normal text-dark-400">
                  (671) 555-0110
                </p>
              </div>
              <div className="w-full md:w-1/2 pl-3">
                <h5 className="text-base font-medium text-gray-600 border-b border-[#E6E6E6] py-2">
                  Billing Address
                </h5>
                <h6 className="text-dark-400 text-lg font-normal pt-2">
                  Dainne Russell
                </h6>
                <p className="text-dark-500 text-base font-normal">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
                <p className="text-gray-600 text-sm font-medium pt-4">Email</p>
                <p className="text-base font-normal text-dark-400">
                  dainne.ressell@gmail.com
                </p>
                <p className="text-gray-600 text-sm font-medium pt-2">Phone</p>
                <p className="text-base font-normal text-dark-400">
                  (671) 555-0110
                </p>
              </div>
            </div>
            <div className="md:col-span-2 w-full flex items-center border border-[#E6E6E6] bg-white rounded-lg px-3 pb-3 pt-1">
              <div className="w-full md:w-1/2 border-r border-[#E6E6E6] ">
                <h5 className="text-sm font-medium text-gray-600 border-b border-[#E6E6E6] py-2">
                  Order ID: <br />{" "}
                  <strong className="text-dark-400">#4152</strong>
                </h5>
                <p className="text-gray-600 text-lg font-normal py-3">
                  Subtotal:
                </p>
                <p className="text-gray-600 text-base font-normal">Discount</p>
                <p className="text-gray-600 text-sm font-medium py-3">
                  Shipping
                </p>
                <p className="text-base font-normal text-dark-400">Total</p>
              </div>
              <div className="w-full md:w-1/2 pl-3">
                <h5 className="text-sm font-medium text-gray-600 border-b border-[#E6E6E6] py-2">
                  Payment Method: <br />{" "}
                  <strong className="text-dark-400">Paypal</strong>
                </h5>
                <p className="text-dark-400 text-lg font-normal py-3">
                  $365.00
                </p>
                <p className="text-dark-400 text-base font-normal">20%</p>
                <p className="text-dark-400 text-sm font-medium py-3">Free</p>
                <p className="text-base font-bold text-primary-200">$84.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* steper  */}
        <div className="relative">
        <div className="z-50 flex justify-between items-center mx-2 md:mx-10 mt-10 md:mt-14">
          <div className="flex flex-col justify-center items-center">
            <button className="text-base font-normal text-white bg-primary-100 p-3 rounded-full">
              <FaCheck className="w-[23px] h-[23px]" />
            </button>
            <p>Order received</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="text-base font-normal text-white bg-primary-100 px-4 py-3 rounded-full">
              02
            </button>
            <p>Processing</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="text-base font-normal text-white bg-primary-100 p-3 rounded-full">
              03
            </button>
            <p>On the way</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="text-base font-normal text-white bg-primary-100 px-4 py-3 rounded-full">
              04
            </button>
            <p>Delivered</p>
          </div>
        </div>
        <div className="z-10 absolute top-6 right-0 left-0 border-b-4 border-primary-100 mx-2 md:mx-10" />
        </div>
        
        {/* product order cart  */}
        <table className="w-full mt-14">
          <thead className="bg-[#F2F2F2] py-10 ">
            <th className="text-sm font-medium text-dark-900">Product</th>
            <th className="text-sm font-medium text-dark-900">Price</th>
            <th className="text-sm font-medium text-dark-900">Quantity</th>
            <th className="text-sm font-medium text-dark-900">Subtotal</th>
          </thead>
          <tbody>
            {productCartData?.map((data) => (
              <tr className="">
                <td className="flex items-center justify-center gap-6">
                  {/* <Image src={data?.image} alt={data?.title} width={75} height={75} /> */}
                  <div className="flex items-center justify-center gap-6">
                    <Image
                      src="/assets/homePage/red_capsicum.png"
                      alt="product image"
                      width={75}
                      height={75}
                    />
                    <p className="text-base font-medium text-dark-400 ">
                      {data?.title}
                    </p>
                  </div>
                </td>
                <td className="text-center text-base font-medium text-dark-400">
                  {data?.price}
                </td>
                <td className="text-center text-base font-medium text-dark-400">
                  {data?.quantity}
                </td>
                <td className="text-center text-base font-medium text-dark-400">
                  {data?.subTotal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetailsView;
