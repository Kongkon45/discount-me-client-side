import React from 'react';
import itemsCategoryData from "../../../itemCategory.json"
import Image from 'next/image';

const ItemCategory = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6  5xl:grid-cols-12 gap-5'>
                {
                    itemsCategoryData?.map((data)=>{
                        return <div key={data?.id} className='items_category_cart_bg py-2'>
                            <Image src={data?.img} alt={data?.category} width={50} height={50} className='w-[50px] h-[50px] mx-auto'/>
                            <p className='text-lg font-semibold text-center'>{data?.category}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ItemCategory;