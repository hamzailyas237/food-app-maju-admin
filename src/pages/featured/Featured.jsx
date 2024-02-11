import React from "react";
import FeaturedTable from "../../components/featuredTable/FeaturedTable";
import { useLocation } from "react-router-dom";

const Featured = () => {
  const location = useLocation();
  return (
    <div>
      <FeaturedTable id={location.state} />
    </div>
  );
};

export default Featured;
