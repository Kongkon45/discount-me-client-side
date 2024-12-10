"use client"
import React from 'react';
import ItemCategory from '../ItemCategory/ItemCategory';
import itemsAllProductData from "../../../itemAllProducts.json"
import Image from 'next/image';
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { addCart } from '@/redux/features/carts/cartsSlice';

const ItemAllProducts = () => {
    const dispatch = useDispatch();
    return (
        <div className='container pt-[46px]'>
            <ItemCategory/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 5xl:gap-5 py-[20px] md:py-[40px] xl:py-[50px] 5xl:py-[63px]'>
                {
                    itemsAllProductData?.map((data:any)=>{
                        return <div key={data?.id} className='items_category_cart_bg py-2'>
                            <div className='relative'>
                            <Image src={data?.img} alt={data?.title} width={493} height={222} className='w-[493px] h-[222px] mx-auto'/>
                            <span className='absolute top-4 right-4 bg-primary p-2 rounded-full'><FiShoppingCart  onClick={()=>dispatch(addCart(data))} className='text-white w-[12px] h-[12px] cursor-pointer'/></span>
                            </div>
                            <div className="flex items-center justify-between px-[20px] py-[12px]">
                                <div>
                                <h5 className='text-2xl font-semibold'>{data?.title}</h5>
                                <p className='text-lg font-normal'>{data?.desc}</p>
                                </div>
                                <p className='text-2xl font-semibold'>{data?.price}</p>
                            </div>
                            
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ItemAllProducts;