import React from "react";
import Link from "next/link";
import SideBar from "../../SideBar/SideBar";

const OrderDetails = () => {
  return (
    <div className="container grid grid-col-1 md:grid-cols-4 gap-5 my-14">
      <div className="md:col-span-1 navigation_cart_bg py-5">
        <SideBar />
      </div>
      <div className="md:col-span-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <h5 className="text-2xl font-medium text-dark-400 pr-3">
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
          <button className="text-lg font-medium text-primary cursor-pointer">
            <Link href="/dashboard/order-history">Back to List</Link>
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
                <h5 className="text-base font-medium text-gray-600 border-b border-[#E6E6E6] py-2">
                Order ID: <br/> <strong className="text-dark-400">#4152</strong>
                </h5>
                <p className="text-gray-600 text-lg font-normal py-3">
                Subtotal:
                </p>
                <p className="text-gray-600 text-base font-normal">
                Discount
                </p>
                <p className="text-gray-600 text-sm font-medium py-3">Shipping</p>
                <p className="text-base font-normal text-dark-400">
                Total
                </p>
              </div>
              <div className="w-full md:w-1/2 pl-3">
                <h5 className="text-base font-medium text-gray-600 border-b border-[#E6E6E6] py-2">
                Payment Method: <br/> <strong className="text-dark-400">Paypal</strong>
                </h5>
                <p className="text-dark-400 text-lg font-normal py-3">
                $365.00
                </p>
                <p className="text-dark-400 text-base font-normal">
                20%
                </p>
                <p className="text-dark-400 text-sm font-medium py-3">Free</p>
                <p className="text-base font-normal text-primary-200">
                $84.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
