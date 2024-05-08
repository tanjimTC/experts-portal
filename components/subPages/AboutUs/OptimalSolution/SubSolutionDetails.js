import React from "react";
import SolutionCard from "../../../Cards/SolutionCard";
import { solutionData } from "./solutionData";

const SubSolutionDetails = () => {
  return (
    <div className="flex flex-wrap -m-4">
      {solutionData.map((data, index) => (
        <div className="px-4 pt-4 md:w-1/2" key={index}>
          <SolutionCard {...data} />
        </div>
      ))}
    </div>
  );
};

export default SubSolutionDetails;
