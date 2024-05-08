import React from "react";
import SubExperienceHeader from "./SubExperienceHeader";
import SubSubExperienceDetails from "./SubSubExperienceDetails";

const Experience = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="text-textColor  container">
        <div className="container px-5 py-16 mx-auto">
          <SubExperienceHeader />
          <SubSubExperienceDetails />
        </div>
      </div>
    </div>
  );
};

export default Experience;
