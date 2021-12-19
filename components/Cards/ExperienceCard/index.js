const ExperienceCard = ({ year, title, desc }) => {
  return (
    <div className="flex px-8 py-0 md:py-8  flex-col">
      <h2 className="text-4xl font-bold text-center  text-primary mb-4">
        {year}
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
