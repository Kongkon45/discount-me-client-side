import React from "react";
import SideBar from "./SideBar/SideBar";
import Dashboard from "./Dashboard/page";

const DashboardAllComponent = () => {
  return (
    <div>
      <div className="px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px] grid grid-col-1 md:grid-cols-4 gap-5 my-10">
        <div className="md:col-span-1 navigation_cart_bg py-5">
            <SideBar/>
        </div>
        <div className="md:col-span-3"><Dashboard/></div>
      </div>
    </div>
  );
};

export default DashboardAllComponent;
