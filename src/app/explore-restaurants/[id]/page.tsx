
import ViewRestaurant from '@/components/ExploreRestaurants/ViewRestaurant/ViewRestaurant';
import React from 'react';

const ViewRestaurantPage = ({params}:any) => {
    return (
        <div>
            <ViewRestaurant id={params?.id} />
        </div>
    );
};

export default ViewRestaurantPage;