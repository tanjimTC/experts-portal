import React from "react";
import AllServiceDetails from "./AllServiceDetails";
import AllServicesTitle from "./AllServicesTitle";

const AllServices = () => {
  return (
    <div className="text-textColor  container">
      <AllServicesTitle />
      <AllServiceDetails />
    </div>
  );
};

export default AllServices;
