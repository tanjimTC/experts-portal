import CompanyMotoCard from "../../../Cards/CompanyMotoCard";

const data = [
  {
    title: "What we can do?",
    text: "We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail Consultancy .",
    link: "./images/AboutUs/resnd.svg",
  },
  {
    title: "Become our partners?",
    text: "Our preventive and progressive approach will help you take the lead while addressing possible threats in managing data.",
    link: "./images/AboutUs/group.svg",
  },
  {
    title: "Need a hand?",
    text: "Our support team is available 24/7 a day, 7 days a week and can get ready for solving any of your situational rising problems.",
    link: "./images/AboutUs/team.svg",
  },
];

const CompanyMotoSection = () => {
  return (
    <div className={"container py-20"}>
      <div className={"text-center font-primary text-textColor mb-16"}>
        <p className={"text-primary text-sm md:text-lg mb-5"}>OUR COMPANY</p>
        <p className={"text-xl md:text-4xl md:mx-32 font-bold"}>
          We run all kinds of Services that vow your{" "}
          <span className={"text-primary"}>success</span>
        </p>
      </div>
      <div className={"grid grid-cols-12"}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={"col-span-12 md:col-span-6 lg:col-span-4"}
            >
              <CompanyMotoCard data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyMotoSection;
