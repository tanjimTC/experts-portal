import React from "react";
import CallNowLeft from "./CallNowLeft";
import CallNowRight from "./CallNowRight";

const CallNow = () => {
  return (
    <div
      className={"bg-callnowBG object-contain bg-cover bg-center bg-no-repeat"}
      style={{
        backgroundImage: `linear-gradient(rgba(235, 242, 251,0.5), rgba(235, 242, 251,0.5)),url(${"/images/homepage/NoPath.png"})`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 container">
        <CallNowLeft />
        <CallNowRight />
      </div>
    </div>
  );
};

export default CallNow;
