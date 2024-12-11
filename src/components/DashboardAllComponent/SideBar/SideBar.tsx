import React from 'react';
import { MdDashboard } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { IoMdGitCompare } from "react-icons/io";
import Link from "next/link";

const SideBar = () => {
    return (
        <div>
            <h5 className='text-2xl font-medium text-dark-400 pl-4 pb-4'>Navigation</h5>
                    <ul>
                        <Link href="/dashboard">
                        <li className='flex items-center gap-2 py-2 px-4 hover:bg-primary-50 text-lg font-normal hover:font-bold text-dark-600 cursor-pointer'><MdDashboard/>Dashboard</li>
                        </Link>
                        <Link href="/dashboard/order-history">
                        <li className='flex items-center gap-2 py-2 px-4 hover:bg-primary-50 text-lg font-normal hover:font-bold text-dark-600 cursor-pointer'><IoMdGitCompare/>Order History</li>
                        </Link>
                        <li className='flex items-center gap-2 py-2 px-4 hover:bg-primary-50 text-lg font-normal hover:font-bold text-dark-600 cursor-pointer'><IoBagCheckOutline/>Shopping Cart</li>
                        <Link href="/dashboard/setting">
                        <li className='flex items-center gap-2 py-2 px-4 hover:bg-primary-50 text-lg font-normal hover:font-bold text-dark-600 cursor-pointer'><IoSettingsOutline/>Settings</li>
                        </Link>
                        
                        <li className='flex items-center gap-2 py-2 px-4 hover:bg-primary-50 text-lg font-normal hover:font-bold text-dark-600 cursor-pointer'><CiLogin/>Log-out</li>
                    </ul>
        </div>
    );
};

export default SideBar;