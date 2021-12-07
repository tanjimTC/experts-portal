import React from "react";
import { serviceData } from "./ServiceData";
import ServicesCard from "../../../Cards/ServicesCard";

const ServiceDetails = () => {
  return (
    <div className="px-5 pt-5 pb-14">
      <div className="flex flex-wrap -m-4">
        {serviceData.map((data, index) => (
          <ServicesCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
