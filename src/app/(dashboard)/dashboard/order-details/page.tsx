import CategoryBanner from '@/components/CategoryBanner/CategoryBanner';
import OrderDetailsView from '@/components/DashboardAllComponent/OrderDetailsView/OrderDetailsView';
import React from 'react';

const page = () => {
    return (
        <div>
            <CategoryBanner/>
            <OrderDetailsView/>
        </div>
    );
};

export default page;