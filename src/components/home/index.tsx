import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import TopRestaurants from './TopRestaurants/TopRestaurants';
import Products from './Products/Products';

const AllHomeComponents = () => {
    return (
        <div>
            <section>
            <HomeBanner/>
            </section>

            <section>
            <TopRestaurants/>
            </section>

            <section>
            <Products/>
            </section>
        </div>
    );
};

export default AllHomeComponents;