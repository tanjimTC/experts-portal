import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col mb-10 items-start">
      <div className="flex-grow">
        <p className="text-lg title-font font-bold mb-4">
          Best Consultancy Company In The World
        </p>
        <ul className={"list-disc"}>
          <div className={"ml-5 text-left"}>
            <li className={"mb-2 mt-1 text-lg font-normal text-gray-600"}>
              Perfect for Consultancy Solutions and Services Company
            </li>
            <li className={"mb-2 mt-1 text-lg font-normal text-gray-600"}>
              Provided by experts to help challenge critical activities
            </li>
            <li className={"mb-2 mt-1 text-lg font-normal text-gray-600"}>
              Complemented with peer perspectives and advice
            </li>
            <li className={"mb-2 mt-1 text-lg font-normal text-gray-600"}>
              Security services cloud computing services
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Features;
