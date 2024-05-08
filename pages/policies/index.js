import { useState } from "react";
import SubPolicyPage from "../../components/subPages/PolicyPage/SubPolicyPage";
import Hero from "../../components/Hero";
import HomeLayout from "../../layouts/HomeLayout";

const Policies = () => {
  const [heroText, setHeroText] = useState("Privacy Policy");

  return (
    <HomeLayout>
      <Hero
        image={"./images/Policies/policiesBG.jpg"}
        text={heroText}
        className={"h-96 md:h-550"}
      />
      <SubPolicyPage setHeroText={setHeroText} />
    </HomeLayout>
  );
};

export default Policies;
