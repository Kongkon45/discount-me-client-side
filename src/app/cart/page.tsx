import CartsPage from '@/components/carts';
import CategoryBanner from '@/components/CategoryBanner/CategoryBanner';
import React from 'react';

const CartPage = () => {
    return (
        <div>
            <CategoryBanner/>
            <CartsPage/>
        </div>
    );
};

export default CartPage;