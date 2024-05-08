import React from "react";
import Features from "./Features";
import FeatureTitle from "./FeatureTitle";

const SubAboutText = () => {
  return (
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 text-left">
      <FeatureTitle />
      <Features />
    </div>
  );
};

export default SubAboutText;
