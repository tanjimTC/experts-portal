import React from "react";

const AboutCard = ({ title, sub, bg, icon, text }) => {
  return (
    <div className="p-2 sm:p-10 text-center cursor-pointer">
      <div
        className={`py-16 border   max-w-sm rounded overflow-hidden shadow-lg transition duration-500  ${
          bg ? "bg-white border-gray-200" : "bg-heroBG border-heroBG"
        } `}
      >
        <div className="space-y-10">
          <div className={"w-24 mx-auto"}>
            <img src={icon} alt="icon" />
          </div>

          <div className={`px-6 ${text}`}>
            <div className="space-y-5">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-base">{sub}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
