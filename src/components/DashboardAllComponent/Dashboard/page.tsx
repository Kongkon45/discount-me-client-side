import Image from 'next/image';
import React from 'react';

const Dashboard = () => {
    return (
        <div className='w-1/2'>
            <div className='profile__bg py-[26px] md:py-[30px] xl:py-[36px]'>
                <Image src="/assets/homePage/dianneRussell.png" alt='dianneRussell' width={138} height={138} className='w-[138px] h-[138px] rounded-full mx-auto'/>
                <h5 className='text-2xl font-semibold text-dark-400 py-2 text-center'>Dianne Russell</h5>
                <p className='text-lg font-normal text-dark-800 text-center'>Customer</p>
                <p className='text-xl font-medium text-primary pt-2 text-center cursor-pointer'>Edit Profile</p>
            </div>
        </div>
    );
};

export default Dashboard;