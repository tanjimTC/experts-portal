import React from "react";

const ConnectedRight = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(42, 40, 82, 0.5), rgba(42, 40, 82, 0.5)),url(${"/images/homepage/NoPath.png"})`,
      }}
      className={"object-contain bg-cover bg-center bg-no-repeat"}
    >
      <div className={"text-center pt-6 pb-6 md:pt-14 md:pb-14 "}>
        <img
          src="/images/homepage/Icon material-local-phone.svg"
          alt="phone"
          className={"w-10 mx-auto mb-4"}
        />
        <p className={"text-xl md:text-2xl font-semibold mb-2 bg-clip-text"}>
          +1 (347) 849-7449
        </p>
        <button
          className={
            "bg-white text-primary font-semibold py-2 px-5 mt-2 rounded focus:outline-none"
          }
        >
          <a href="tel:+1-347-849-7449">Contact Now</a>
        </button>
      </div>
    </div>
  );
};

export default ConnectedRight;
