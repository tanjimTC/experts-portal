import React from "react";

const HeroComponent = ({ title }) => {
  return (
    <div
      className={
        "flex justify-center items-center text-center min-h-460px bg-center bg-cover bg-no-repeat "
      }
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/images/services/Rectangle 41.png')",
      }}
    >
      <p
        className={
          "mb-4 font-semibold text-2xl md:text-4xl text-white uppercase"
        }
      >
        {title}
      </p>
    </div>
  );
};

export default HeroComponent;
