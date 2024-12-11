import CategoryBanner from '@/components/CategoryBanner/CategoryBanner';
import DashboardAllComponent from '@/components/DashboardAllComponent/DashboardAllComponent';
import React from 'react';


const DashboardPage = () => {
    return (
        <div>
            <CategoryBanner/>
            <DashboardAllComponent/>
        </div>
    );
};

export default DashboardPage;