import React from "react";
import { aboutUsData } from "../../../../Assets/Data/data";
import AboutCard from "../../../Cards/AboutCard";

const AboutUs = () => {
  return (
    <div>
      <div
        className="bannerFondo h-80 bg-sectionBG	bg-left-top bg-auto bg-repeat-x"
        style={{ backgroundImage: "url(`/images/Sign up side image.png`)" }}
      ></div>

      <div className="-mt-64 container min-h-80vh py-8">
        <div className="w-full text-center">
          <h1 className="font-bold text-5xl text-white mb-12 md:mb-2">
            Why US?
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
          {aboutUsData.map((data, index) => (
            <AboutCard {...data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
