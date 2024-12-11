import Image from 'next/image';
import React from 'react';
import "./Services.css";

type ServiceData = {
    id: number;
    img: string;
    title: string;
    desc: string;
};

const servicesData: ServiceData[] = [
    { id: 1, img: "/assets/homePage/discount.png", title: "Discount", desc: "Every week new sales" },
    { id: 2, img: "/assets/homePage/delivery.png", title: "Free Delivery", desc: "100% Free for all orders" },
    { id: 3, img: "/assets/homePage/support.png", title: "Great Support 24/7", desc: "We care your experiences" },
    { id: 4, img: "/assets/homePage/secure.png", title: "Secure Payment", desc: "100% Secure Payment Method" },
];

type DimensionMap = {
    [key: number]: string;
};

const dimensions: DimensionMap = {
    1: "w-[30px] h-[30px] md:w-[40px] md:h-[40px] 3xl:w-[50px] 3xl:h-[50px]",
    2: "w-[40px] h-[24px] md:w-[56px] md:h-[33px] 3xl:w-[60px] 3xl:h-[36px]",
    3: "w-[36px] h-[36px] md:w-[44px] md:h-[44px] 3xl:w-[48px] 3xl:h-[48px]",
    4: "w-[36px] h-[36px] md:w-[44px] md:h-[44px] 3xl:w-[48px] 3xl:h-[48px]",
};

const Services: React.FC = () => {
    return (
        <div className="px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px] padding__all my-4 md:my-0">
            <div className='services__bg__color shadow-lg border bg-white mx-2 md:mx-6 lg:mx-7 xl:mx-8 3xl:mx-10 5xl:mx-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                    {servicesData.map(({ id, img, title, desc }) => (
                        <div key={id} className='py-[16px] px-[8px] hover:bg-gray-100 cursor-pointer transition-colors'>
                            <div className='flex items-center gap-[6px]'>
                                <Image
                                    src={img}
                                    alt={title}
                                    width={40}
                                    height={40}
                                    className={dimensions[id] || "w-[40px] h-[40px]"}
                                />
                                <div>
                                    <p className='text-gray-900 text-sm xl:text-base font-medium'>{title}</p>
                                    <p className='text-[13px] text-secondary-50 font-normal'>{desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;