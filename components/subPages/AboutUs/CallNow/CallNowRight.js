import React from "react";
import CallNowCard from "../../../Cards/CallNowCard";
import { callNowData } from "./CallNowData";

const CallNowRight = () => {
  return (
    <div
      className={
        "grid justify-between items-center grid-cols-1 md:grid-cols-2 mt-5 md:mt-0"
      }
    >
      {callNowData.map((data, index) => (
        <CallNowCard {...data} key={index} />
      ))}
    </div>
  );
};

export default CallNowRight;
