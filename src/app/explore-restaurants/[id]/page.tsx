// import ViewRestaurant from '@/components/ExploreRestaurants/ViewRestaurant/ViewRestaurant';
// import React from 'react';

// interface ViewRestaurantPageProps {
//     params: {
//         id: number;
//     };
// }

// const ViewRestaurantPage: React.FC<ViewRestaurantPageProps> = ({ params }) => {
//     const id = params?.id;
//     return (
//         <div>
//             <ViewRestaurant id={id} />
//         </div>
//     );
// };

// export default ViewRestaurantPage;



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