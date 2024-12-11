import CategoryBanner from '@/components/CategoryBanner/CategoryBanner';
import React from 'react';
import { MdDashboard } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { IoMdGitCompare } from "react-icons/io";
import Link from "next/link";

const DashboardPage = () => {
    return (
        <div>
            <CategoryBanner/>
            <div className='container grid grid-col-1 md:grid-cols-4 gap-5 my-10'>
                <div className='md:col-span-1 navigation_cart_bg py-5'>
                    <h5 className='text-2xl font-medium text-dark-400 pl-4 pb-4'>Navigation</h5>
                    <ul>
                        <Link href="">
                        <li className='flex items-center gap-2 py-2 px-4 hover:bg-primary-50 text-lg font-normal hover:font-bold text-dark-600 cursor-pointer'><MdDashboard/>Dashboard</li>
                        </Link>
                        
                        <li className='flex items-center gap-2 py-2 px-4 hover:bg-primary-50 text-lg font-normal hover:font-bold text-dark-600 cursor-pointer'><IoMdGitCompare/>Order History</li>
                        <li className='flex items-center gap-2 py-2 px-4 hover:bg-primary-50 text-lg font-normal hover:font-bold text-dark-600 cursor-pointer'><IoBagCheckOutline/>Shopping Cart</li>
                        <li className='flex items-center gap-2 py-2 px-4 hover:bg-primary-50 text-lg font-normal hover:font-bold text-dark-600 cursor-pointer'><IoSettingsOutline/>Settings</li>
                        <li className='flex items-center gap-2 py-2 px-4 hover:bg-primary-50 text-lg font-normal hover:font-bold text-dark-600 cursor-pointer'><CiLogin/>Log-out</li>
                    </ul>
                </div>
                <div className='md:col-span-3'>
                    content
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;