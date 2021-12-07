import React from "react";
import Link from "next/link";

const ServicesCard = ({ icon, title, desc /*to*/ }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2  p-4">
      <div className=" p-6 rounded-md bg-gray-50 shadow-md transition duration-300 hover:shadow-xl text-center h-full sm:min-h-380px md:min-h-350px">
        <div className={"text-center"}>
          <div className="w-20 h-20 mx-auto inline-flex items-center justify-center rounded-full bg-sectionBG mb-4 ">
            <img src={icon} className="tab-card-logo" alt="" />
          </div>
        </div>
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="leading-relaxed text-base font-medium text-gray-600 mb-4">
          {desc}
        </p>
        {/* <Link href={to}>
          <a className={"text-primary font-semibold"}>Read more {" >"}</a>
        </Link> */}
      </div>
    </div>
  );
};

export default ServicesCard;
