import React from "react";
import ServicesCard from "../../../Cards/ServicesCard";
import { allServicesData } from "../../HomePage/OurServices/ServiceData";

const AllServiceDetails = () => {
  return (
    <div className="px-5 pt-5 pb-14">
      <div className="flex flex-wrap -m-4">
        {allServicesData.map((data, index) => (
          <ServicesCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllServiceDetails;
