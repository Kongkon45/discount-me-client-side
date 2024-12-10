import ViewRestaurant from "@/components/ExploreRestaurants/ViewRestaurant/ViewRestaurant";
import React from "react";

interface PageProps {
  params: {
    id: string | number;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <div>
      <ViewRestaurant id={params?.id} />
    </div>
  );
};

export default Page;
