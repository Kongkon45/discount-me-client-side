import CategoryBanner from '@/components/CategoryBanner/CategoryBanner';
import OrderDetails from '@/components/DashboardAllComponent/OrderHistoryAllComponents/OrderDetails/OrderDetails';
import React from 'react';

const OrderDetailsPage = () => {
    return (
        <div>
            <CategoryBanner/>
            <OrderDetails/>
        </div>
    );
};

export default OrderDetailsPage;