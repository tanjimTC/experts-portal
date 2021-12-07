import React from "react";
import ConnectedLeft from "./ConnectedLeft";
import ConnectedRight from "./ConnectedRight";

const Connected = () => {
  return (
    <div className={"bg-sectionBG"}>
      <div className="grid grid-cols-1 md:grid-cols-2 text-white container">
        <ConnectedLeft />
        <ConnectedRight />
      </div>
    </div>
  );
};

export default Connected;
