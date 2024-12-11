import CategoryBanner from '@/components/CategoryBanner/CategoryBanner';
import OrderHistoryAllComponents from '@/components/DashboardAllComponent/OrderHistoryAllComponents/OrderHistoryAllComponents';
import React from 'react';

const OrderHistoryPage = () => {
    return (
        <div>
            <CategoryBanner/>
            <OrderHistoryAllComponents/>
        </div>
    );
};

export default OrderHistoryPage;