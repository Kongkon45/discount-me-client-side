
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const orderData = [
  {
    id: 1,
    order: "#738",
    date: "8 Sep, 2020",
    total: "$135.00 (5 Products)",
    status: "Processing",
    view: "View Details",
  },
  {
    id: 2,
    order: "#703",
    date: "24 May, 2020",
    total: "$25.00 (1 Product)",
    status: "on the way",
    view: "View Details",
  },
  {
    id: 3,
    order: "#130",
    date: "22 Oct, 2020",
    total: "$250.00 (4 Products)",
    status: "Completed",
    view: "View Details",
  },
  {
    id: 4,
    order: "#561",
    date: "1 Feb, 2020",
    total: "$35.00 (1 Products)",
    status: "Completed",
    view: "View Details",
  },
  {
    id: 5,
    order: "#536",
    date: "21 Sep, 2020",
    total: "$578.00 (13 Products)",
    status: "Cancelled",
    view: "View Details",
  },
  {
    id: 6,
    order: "#492",
    date: "22 Oct, 2020",
    total: "$345.00 (7 Products)",
    status: "Completed",
    view: "View Details",
  },
  {
    id: 7,
    order: "#738",
    date: "8 Sep, 2020",
    total: "$135.00 (5 Products)",
    status: "Processing",
    view: "View Details",
  },
  {
    id: 8,
    order: "#703",
    date: "24 May, 2020",
    total: "$25.00 (1 Product)",
    status: "on the way",
    view: "View Details",
  },
  {
    id: 9,
    order: "#130",
    date: "22 Oct, 2020",
    total: "$250.00 (4 Products)",
    status: "Completed",
    view: "View Details",
  },
  {
    id: 10,
    order: "#561",
    date: "1 Feb, 2020",
    total: "$35.00 (1 Products)",
    status: "Completed",
    view: "View Details",
  },
  {
    id: 11,
    order: "#536",
    date: "21 Sep, 2020",
    total: "$578.00 (13 Products)",
    status: "Cancelled",
    view: "View Details",
  },
  {
    id: 12,
    order: "#492",
    date: "22 Oct, 2020",
    total: "$345.00 (7 Products)",
    status: "Completed",
    view: "View Details",
  }
];

const OrderHistory = () => {
  return (
    <div>
      <div>
      <h5 className="text-2xl font-medium text-dark-400">
          Order History
          </h5>
        <table className="w-full border-collapse border border-gray-200 mt-4">
          <thead>
            <tr className="bg-gray-500 text-left">
              <th className="border border-gray-200 p-2">Order ID</th>
              <th className="border border-gray-200 p-2">Date</th>
              <th className="border border-gray-200 p-2">Total</th>
              <th className="border border-gray-200 p-2">Status</th>
              <th className="border border-gray-200 p-2"></th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order) => (
              <tr key={order?.id}>
                <td className="border border-gray-200 p-2">{order?.order}</td>
                <td className="border border-gray-200 p-2">{order?.date}</td>
                <td className="border border-gray-200 p-2">{order?.total}</td>
                <td className="border border-gray-200 p-2"
                >
                  {order?.status}
                </td>

                <td className="border border-gray-200 p-2 text-center">
                  <button className="text-primary-100 cursor-pointer">
                    {order?.view}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination design  */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button className="bg-gray-800 p-2 rounded-full"><MdKeyboardArrowLeft className="text-white w-[24px] h-[24px]"/></button>
        <button className="bg-primary hover:bg-gray-800 text-white py-2 px-4 rounded-full text-lg font-bold ">1</button>
        <button className="bg-gray-800 hover:bg-primary text-dark-500 hover:text-white py-2 px-4 rounded-full text-lg font-bold">2</button>
        <button className="bg-gray-800 hover:bg-primary text-dark-500 hover:text-white py-2 px-4 rounded-full text-lg font-bold">3</button>
        <button className="border border-gray-800 p-2 rounded-full"><MdOutlineKeyboardArrowRight className="text-black w-[24px] h-[24px]"/></button>
      </div>
    </div>
  );
};

export default OrderHistory;
