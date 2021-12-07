const PolicyCard = ({ subtitle, title, text }) => {
  return (
    <div>
      <div className={"mt-12"}>
        <div className={"font-primary text-left"}>
          <p className={"text-primary text-xs md:text-base"}>{subtitle}</p>
          <p
            className={"text-textColor font-bold text-xl lg:text-4xl mt-6"}
            dangerouslySetInnerHTML={{ __html: title }}
          ></p>
          <p
            className={"text-textColor text-sm md:text-lg mt-6"}
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;
