import React from "react";
import SubAboutText from "./SubAboutText";
import SubAboutUsImage from "./SubAboutUsImage";

const LegendSection = () => {
  return (
    <div className={"container text-textColor py-4 bg-primaryBG"}>
      <div className="text-textColor body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <SubAboutUsImage />
          <SubAboutText />
        </div>
      </div>
    </div>
  );
};

export default LegendSection;
