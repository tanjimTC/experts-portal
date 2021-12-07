import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const ExperienceCard = ({ year, title, desc }) => {
  return (
    <div className="flex px-8 py-0 md:py-8  flex-col">
      <h2 className="text-4xl font-bold text-center  text-primary mb-4">
        <CountUp end={year}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        +
      </h2>
      <h2 className="text-xl font-bold text-center mb-3 text-gray-700">
        {title}
      </h2>
      <p className="leading-relaxed font-semibold text-gray-600 text-center">
        {desc}
      </p>
    </div>
  );
};

export default ExperienceCard;
