import React from 'react';
import productCategoryData from "../../../itemProduct.json"
import Image from 'next/image';
const ProductCategory = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 5xl:gap-5 py-[20px] md:py-[40px] xl:py-[50px] 5xl:py-[63px]'>
                {
                    productCategoryData?.map((data)=>{
                        return <div key={data?.id} className='items_category_cart_bg py-2'>
                            <Image src={data?.img} alt={data?.title} width={493} height={222} className='w-[493px] h-[222px] mx-auto'/>
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

export default ProductCategory;