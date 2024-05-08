import React from "react";

const SolutionCard = ({ title, desc }) => {
  return (
    <div className="flex px-3 md:px-8 py-4  flex-col">
      <h2 className="text-2xl font-bold text-left  text-primary mb-4 flex items-baseline">
        <img
          src="/images/AboutUs/Icon feather-check.svg"
          alt="checkIcon"
          className={"mr-2"}
        />
        {title}
      </h2>
      <p className="leading-relaxed font-semibold text-gray-600 text-left ml-7 mr-2 md:mr-8">
        {desc}
      </p>
    </div>
  );
};

export default SolutionCard;
