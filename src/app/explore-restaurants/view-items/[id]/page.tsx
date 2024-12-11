import ItemAllProductView from '@/components/ExploreRestaurants/ItemAllProductView/ItemAllProductView';
import React from 'react';

const page = ({params}:any) => {
    return (
        <div>
            <ItemAllProductView id={params?.id}/>
        </div>
    );
};

export default page;