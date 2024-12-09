import Image from 'next/image';
import React from 'react';
import "./Services.css";
const servicesData = [
    {
        id : 1,
        img : "/assets/homePage/discount.png",
        title : "Discount",
        desc : "Every week new sales"
    },
    {
        id : 2,
        img : "/assets/homePage/delivery.png",
        title : "Free Delivery",
        desc : "100% Free for all orders"
    },
    {
        id : 3,
        img : "/assets/homePage/support.png",
        title : "Great Support 24/7",
        desc : "We care your experiences"
    },
    {
        id : 4,
        img : "/assets/homePage/secure.png",
        title : "secure Payment",
        desc : "100% Secure Payment Method"
    }
]
const Services = () => {
    return (
        <div className="container padding__top padding__bottom">
            <div className='services__bg__color shadow-lg border bg-white mx-1 md:mx-6 lg:mx-12 xl:mx-16 3xl:mx-20 5xl:mx-24'>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    servicesData?.map((data)=>{
                        return <div key={data?.id} className=''>
                            <div className='flex items-center gap-[14px]'>
                            <div>
                                <Image src={data?.img} alt={data?.title} width={50} height={50}/>
                            </div>
                            <div>
                                <p>{data?.title}</p>
                                <p>{data?.desc}</p>
                            </div>
                            </div>
                        </div>
                    })
                }
                </div>
            </div>
        </div>
    );
};

export default Services;