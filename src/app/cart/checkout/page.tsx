import CheckoutPage from '@/components/carts/checkout';
import CategoryBanner from '@/components/CategoryBanner/CategoryBanner';
import React from 'react';

const Checkout = () => {
    return (
        <div>
            <CategoryBanner/>
            <CheckoutPage/>
        </div>
    );
};

export default Checkout;