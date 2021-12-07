import React from "react";
import HomeLayout from "../../layouts/HomeLayout";
import HeroSection from "../../components/subPages/AboutUs/HeroSection";
import OptimalSolution from "../../components/subPages/AboutUs/OptimalSolution";
import CallNow from "../../components/subPages/AboutUs/CallNow";
import CompanyMotoSection from "../../components/subPages/AboutUs/CompanyMotoSection";

const index = () => {
  return (
    <HomeLayout>
      <HeroSection />
      <CompanyMotoSection />
      <OptimalSolution />
      <CallNow />
    </HomeLayout>
  );
};

export default index;
