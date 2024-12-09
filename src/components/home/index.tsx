import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import TopRestaurants from './TopRestaurants/TopRestaurants';

const AllHomeComponents = () => {
    return (
        <div>
            <section>
            <HomeBanner/>
            </section>

            <section>
            <TopRestaurants/>
            </section>
        </div>
    );
};

export default AllHomeComponents;