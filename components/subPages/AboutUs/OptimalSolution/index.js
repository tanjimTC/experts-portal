import React from "react";
import SubSolutionDetails from "./SubSolutionDetails";
import SubSolutionHeader from "./SubSolutionHeader";

const OptimalSolution = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="text-textColor container">
        <div className="px-5 py-16 mx-auto">
          <SubSolutionHeader />
          <SubSolutionDetails />
        </div>
      </div>
    </div>
  );
};

export default OptimalSolution;
