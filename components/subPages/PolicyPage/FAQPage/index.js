import FAQCard from "../../../Cards/FAQCard";
const data = [
  {
    question: "Can I buy a single template only?",
    answer: "Yes, you can.",
  },
  {
    question: "Do you provide documentation and support?",
    answer: "Yes",
  },
  {
    question: "How long do I have support access?",
    answer: "1 year",
  },
  {
    question: "How do you guys generate pricing part? ",
    answer: `Experts portal's Smart Pricing tool lets you set your prices to automatically go up or down based on changes in demand for listings 
        like yours. You’re always responsible for your price, so Smart Pricing is controlled by other pricing settings you choose, and 
        you can adjust nightly prices any time. Smart Pricing is based on the type and location of your listing, the season, demand 
        and other factors (depending on your projects).`,
  },
  {
    question:
      "I’ve completed the payment procedure but I have not received any mail with login details or download?",
    answer: "File a complaint. Our support team will reach out to you.",
  },
  {
    question: "Can I share my username and password with others?",
    answer: "No",
  },
];

const FAQPage = () => {
  return (
    <div className={"container mb-12"}>
      <p className={"text-xl md:text-2xl font-primary font-semibold mb-10 "}>
        Frequently ask questions by you
      </p>
      {data.map((item, index) => {
        return <FAQCard {...item} key={index} />;
      })}
    </div>
  );
};

export default FAQPage;
