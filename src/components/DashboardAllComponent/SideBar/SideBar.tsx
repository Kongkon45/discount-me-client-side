"use client"
import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { IoMdGitCompare } from "react-icons/io";
import Link from "next/link";

const SideBar = () => {
  const [active, setActive] = useState("/dashboard");

  const handleActive = (path:any) => {
    setActive(path);
  };

  return (
    <div>
      <h5 className="text-2xl font-medium text-dark-400 pl-4 pb-4">
        Navigation
      </h5>
      <ul>
        <Link href="/dashboard">
          <li
            onClick={() => handleActive("/dashboard")}
            className={`flex items-center gap-2 py-2 px-4 ${
              active === "/dashboard" ? "bg-primary-50 font-bold" : ""
            } hover:bg-primary-50 text-lg font-normal text-dark-600 cursor-pointer`}
          >
            <MdDashboard />
            Dashboard
          </li>
        </Link>
        <Link href="/dashboard/order-history">
          <li
            onClick={() => handleActive("/dashboard/order-history")}
            className={`flex items-center gap-2 py-2 px-4 ${
              active === "/dashboard/order-history"
                ? "bg-primary-50 font-bold"
                : ""
            } hover:bg-primary-50 text-lg font-normal text-dark-600 cursor-pointer`}
          >
            <IoMdGitCompare />
            Order History
          </li>
        </Link>
        <li
          onClick={() => handleActive("cart")}
          className={`flex items-center gap-2 py-2 px-4 ${
            active === "cart" ? "bg-primary-50 font-bold" : ""
          } hover:bg-primary-50 text-lg font-normal text-dark-600 cursor-pointer`}
        >
          <IoBagCheckOutline />
          Shopping Cart
        </li>
        <Link href="/dashboard/setting">
          <li
            onClick={() => handleActive("/dashboard/setting")}
            className={`flex items-center gap-2 py-2 px-4 ${
              active === "/dashboard/setting" ? "bg-primary-50 font-bold" : ""
            } hover:bg-primary-50 text-lg font-normal text-dark-600 cursor-pointer`}
          >
            <IoSettingsOutline />
            Settings
          </li>
        </Link>
        <li
          onClick={() => handleActive("logout")}
          className={`flex items-center gap-2 py-2 px-4 ${
            active === "logout" ? "bg-primary-50 font-bold" : ""
          } hover:bg-primary-50 text-lg font-normal text-dark-600 cursor-pointer`}
        >
          <CiLogin />
          Log-out
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
