import Image from "next/image";
import Link from "next/link";
import React from "react";

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
];

const Dashboard = () => {
  return (
    <div>
      <div className="w-2/3">
        <div className="profile__bg py-[26px] md:py-[30px] xl:py-[36px]">
          <Image
            src="/assets/homePage/dianneRussell.png"
            alt="dianneRussell"
            width={138}
            height={138}
            className="w-[138px] h-[138px] rounded-full mx-auto"
          />
          <h5 className="text-2xl font-semibold text-dark-400 py-2 text-center">
            Dianne Russell
          </h5>
          <p className="text-lg font-normal text-dark-800 text-center">
            Customer
          </p>
          <p className="text-xl font-medium text-primary pt-2 text-center cursor-pointer">
            Edit Profile
          </p>
        </div>
      </div>
      {/* second part  */}
      <div>
        <div className="flex items-center justify-between mt-10">
          <h5 className="text-2xl font-medium text-dark-400">
            Recent Order History
          </h5>
          <p className="text-lg font-medium text-primary cursor-pointer">
            View All
          </p>
        </div>
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
                <td
                  className={`${
                    order?.id === 2 || order?.id === 5
                      ? "text-primary-100"
                      : order?.id === 1
                      ? "text-gray-700"
                      : "text-secondary"
                  } border border-gray-200 p-2`}
                >
                  {order?.status}
                </td>

                <td className="border border-gray-200 p-2 text-center">
                  <Link href="/dashboard/order-details">
                  <button className="text-primary-100 cursor-pointer">
                    {order?.view}
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
