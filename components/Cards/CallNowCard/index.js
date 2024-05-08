import React from "react";

const CallNowCard = ({ image, title, info }) => {
  return (
    <div className={"text-center py-6"}>
      <img src={image} alt="phone" className={"w-10 h-10 m-auto mb-4"} />
      <p className={"text-xl md:text-2xl font-semibold mb-2 bg-clip-text"}>
        {title}
      </p>
      <p
        className={
          "text-xl md:text-2xl font-bold mb-2 bg-clip-text text-primary mt-4"
        }
      >
        {info}
      </p>
    </div>
  );
};

export default CallNowCard;
