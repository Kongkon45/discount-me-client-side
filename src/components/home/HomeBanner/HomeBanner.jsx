import Image from 'next/image';
import React from 'react';

const HomeBanner = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[19px]'>
                <div className='md:col-span-1 flex flex-col justify-center'>
                    <h1 className='text-3xl md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] 3xl:text-[80px] 4xl:text-[90px] 5xl:text-[96px] font-bold text-black leading-tight'>Good <span className="text-primary">food</span>, great <br/> memories</h1>
                    <p className='text-lg font-normal text-black leading-normal'>Enable diners to customize their booking by <br/> requesting a specific table location or view.</p>
                </div>
                <div className='md:col-span-1'>
                    <Image src="/assets/homePage/home_banner_bg.png" alt='home banner' width={699} height={699}/>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;