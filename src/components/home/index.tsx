import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import TopRestaurants from './TopRestaurants/TopRestaurants';
import Products from './Products/Products';
import Services from './Services/Services';

const AllHomeComponents = () => {
    return (
        <div className='custom-container'>
            <section>
            <HomeBanner/>
            </section>

            <section>
            <Services/>
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