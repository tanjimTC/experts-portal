import React from "react";
import ExperienceCard from "../../../Cards/ExperienceCard";
import { experienceData } from "./experienceData";

const SubSubExperienceDetails = () => {
  return (
    <div className="flex flex-wrap -m-4">
      {experienceData.map((data, index) => (
        <div className="p-4 md:w-1/3" key={index}>
          <ExperienceCard {...data} />
        </div>
      ))}
    </div>
  );
};

export default SubSubExperienceDetails;
